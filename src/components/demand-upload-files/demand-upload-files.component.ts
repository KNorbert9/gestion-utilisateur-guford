import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, TableModule } from '@coreui/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import _ from 'lodash';
import { toast } from 'ngx-sonner';

import { NiceToastComponent } from '../nice-toast/nice-toast.component';
import { DemandUploadFilesService } from './demand-upload-files.service';
import { convertFileToBase64, getBlobFromLocalStorage } from "../../utils/storage/code-decode-BS64";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { TippyTooltipDirective } from "../../directives/tippy-tooltip/tippy-tooltip.directive";
import { GeneralModalComponent } from "../general-modal/general-modal.component";
import { LoadingBarComponent } from "../loading-bar/loading-bar.component";
import { FileNameTypePieceJointeModel, TypePieceJointeModel, UploadFilesModel } from "../../models/upload-files.model";
import { TypePiecesEnum } from "../../enums/type-pieces.enum";

// import {fileTypeFromFile, fileTypeFromBlob} from 'file-type';

@UntilDestroy()
@Component({
  selector: 'app-demand-upload-files',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TippyTooltipDirective,
    TippyTooltipDirective,
    GeneralModalComponent,
    LoadingBarComponent,
    PdfViewerModule,
  ],
  templateUrl: './demand-upload-files.component.html',
  styleUrl: './demand-upload-files.component.scss'
})
export class DemandUploadFilesComponent implements OnInit {
  @Input('idFormalite') idFormalite!: number;
  @Input() fileUploads!: UploadFilesModel;
  @Input() typePiecess: TypePiecesEnum = TypePiecesEnum.BL;
  @Input() step: string[] = [];
  @Input() typePieceJointesByUser: WritableSignal<TypePieceJointeModel[]> = signal<TypePieceJointeModel[]>([]);
  @Input() doManualy: boolean = false;
  @Input() isLoading: boolean = false;
  requiredFileType: string = 'application/pdf';
  @Output('onFileUpload') onFileUpload = new EventEmitter<UploadFilesModel>();

  selectedCar: number = 1;
  selectedTypePiece!: TypePieceJointeModel;
  cars = [
    { id: 1, name: 'Certificat Phytosanitaire' },
    { id: 2, name: 'Certificat de Fumigation' },
    { id: 3, name: 'Certificat d’origine' },
    { id: 4, name: 'Certificat de qualité et poids' },
  ];

  typePieces: TypePieceJointeModel[] = [];
  fileName = '';

  pdfSrc!: Uint8Array;

  page: number = 1;
  totalPages!: number;
  isLoaded: boolean = false;
  openModal: boolean = false;
  titleModal: string = '';
  filePreviewUrl!: string;

  constructor(public demandUploadFilesService: DemandUploadFilesService) {
  }


  ngOnInit(): void {
    if (this.doManualy === false) {
      this.demandUploadFilesService
        .getTypePieces()
        .subscribe((res) => {
          console.log(res)
          console.log(this.step)
          let rslt = res?.filter(it => {
            if (this.step.includes(it.libelle!)) {
              let val = it;
              if (val.libelle == 'FEC') {
                val.libelle = 'Facture d\'échange de connaissement'
              }
              return val
            }
            return
            // if (it.libelle === this.step) {
            //   if (this.step == 'FEC') {
            //     let val = it
            //     val.libelle = 'Facture d\'échange de connaissement';
            //     console.log(val)
            //     return val
            //   } else if (this.step == 'BL') {
            //     let val = it
            //     return val
            //   }
            // }
            // return
          });
          console.log(rslt)
          this.typePieceJointesByUser.set(rslt as TypePieceJointeModel[])
        });
    }

  }

  async setFileUploads(file: File): Promise<void> {
    try {
      // Attendre que le fichier soit converti en Base64
      const fileBase64 = await convertFileToBase64(file);

      // Vérifier si fileUploads est vide
      if (_.isEmpty(this.fileUploads)) {
        // Initialiser l'objet fileUploads s'il est vide
        this.fileUploads = {
          idFormalite: 1,
          file: [file], // Pas besoin de forcer le type ici avec "as File"
          filesBase64: [fileBase64],
          fileNameTypePieceJointe: [
            {
              typePieceJointe: this.selectedTypePiece,
              fileName: file.name, // file?.name fonctionne aussi
              idTypePieceJointe: this.selectedTypePiece.id,
            },
          ],
        };
      } else {
        // Mettre à jour fileUploads s'il existe déjà
        this.fileUploads = {
          idFormalite: 1,
          ...this.fileUploads,
          file: [...(this.fileUploads.file as File[]), file as File], // Concaténation des fichiers
          filesBase64: [
            ...(this.fileUploads.filesBase64 as string[]),
            fileBase64,
          ],
          fileNameTypePieceJointe: [
            ...(this.fileUploads
              .fileNameTypePieceJointe as FileNameTypePieceJointeModel[]),
            {
              fileName: file?.name as string,
              typePieceJointe: this.selectedTypePiece,
              idTypePieceJointe: this.selectedTypePiece.id,
            },
          ],
        };
      }
    } catch (error) {
      console.error('Erreur lors du traitement du fichier:', error);
    }
  }

  removeFileUpload(index: number) {
    const deletedFile = this.fileUploads.file![index];
    this.fileUploads.file?.splice(index, 1);
    this.fileUploads.fileNameTypePieceJointe?.splice(index, 1);
    this.fileUploads.filesBase64?.splice(index, 1);

    toast.custom(NiceToastComponent, {
      position: 'top-center',
      componentProps: {
        texto: `fichier "${deletedFile.name}" supprimé!`,
        state: 'success',
      },
    });
  }

  async onFileSelected(event: Event): Promise<void> {
    event.preventDefault();
    event.stopPropagation();
    console.log("event.target", this.selectedTypePiece)
    if (_.isEmpty(this.selectedTypePiece)) {
      toast.custom(NiceToastComponent, {
        position: 'top-center',
        componentProps: {
          texto: 'Veuillez sélectionner un type de piece dabord!',
          state: 'error'
        }
      });
      return;
    }

    if (this.checkIfTypePieceJointeIsAlreadySelected(this.selectedTypePiece)) {
      toast.custom(NiceToastComponent, {
        position: 'top-center',
        componentProps: {
          texto: 'Ce type de piece est déjà sélectionné, supprimez-le dans la liste des fichiers pour le sélectionner à nouveau!',
          state: 'error'
        }
      });
      return;
    }


    const target: HTMLInputElement = event.target as HTMLInputElement;
    const file: File = target?.files?.item(0) as File;

    if (file) {
      try {
        // Attendre que le fichier soit traité dans setFileUploads
        await this.setFileUploads(file);

        // Émettre l'événement après avoir uploadé le fichier
        this.onFileUpload.emit(this.fileUploads);
        console.log("this.fileUploads, ", this.fileUploads)
        // Afficher une notification de succès
        toast.custom(NiceToastComponent, {
          position: 'top-center',
          componentProps: {
            texto: `fichier "${file.name}" ajouté!`,
            state: 'success',
          },
        });
      } catch (error) {
        toast.custom(NiceToastComponent, {
          position: 'top-center',
          componentProps: {
            texto: `fichier "${file.name}" non ajouté!`,
            state: 'error',
          },
        });
        console.error('Erreur lors du traitement du fichier:', error);
      }
    } else {
      console.error('Aucun fichier sélectionné.');
    }
  }

  checkIfTypePieceJointeIsAlreadySelected(typePiece: TypePieceJointeModel) {
    const findTypePiece = this.fileUploads.fileNameTypePieceJointe?.find(typePieceJointe => typePieceJointe.typePieceJointe?.libelle === this.selectedTypePiece.libelle);

    return !!findTypePiece;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  onCloseModal() {
    this.openModal = false;
  }

  onOpenModal(file: File, fileType: FileNameTypePieceJointeModel, fileBase64: string) {
    console.log('fileType', file);
    const realBlob = getBlobFromLocalStorage(fileBase64);
    const tempBlob = new Blob([realBlob as Blob], { type: file.type });
    this.filePreviewUrl = URL.createObjectURL(
      new File([realBlob as Blob], fileType.fileName as string, { type: file.type }),
    );

    this.titleModal = '(' + fileType.typePieceJointe?.libelle + ') ' + fileType.fileName;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.pdfSrc = new Uint8Array(fileReader.result as ArrayBuffer);
    };
    fileReader.readAsArrayBuffer(tempBlob);
    console.log('this.filePreviewUrl', this.filePreviewUrl);
    this.openModal = true;
  }

  getPDF(file: File, fileType: FileNameTypePieceJointeModel, fileBase64: string) {
    this.onOpenModal(file, fileType, fileBase64);
  }
}
