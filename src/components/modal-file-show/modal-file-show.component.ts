import {NgIf} from '@angular/common';
import {Component, Input} from '@angular/core';
import {ButtonDirective, TableDirective} from '@coreui/angular';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {FileNameTypePieceJointeModel, UploadFilesModel} from "../../app/models/upload-files.model";
import {DemandUploadFilesService} from "../demand-upload-files/demand-upload-files.service";
import {GeneralModalComponent} from '../general-modal/general-modal.component';
import {LoadingBarComponent} from '../loading-bar/loading-bar.component';
import {TippyTooltipDirective} from "../../app/directives/tippy-tooltip/tippy-tooltip.directive";
import {ListFilesModel} from "../../app/models/list-files.model";
import {getBlobFromLocalStorage} from "../../utils/storage/code-decode-BS64";

@Component({
    selector: 'app-modal-file-show',
    imports: [
        ButtonDirective,
        GeneralModalComponent,
        LoadingBarComponent,
        NgIf,
        PdfViewerModule,
        TableDirective,
        TippyTooltipDirective,
    ],
  standalone: true,
    templateUrl: './modal-file-show.component.html',
    styleUrl: './modal-file-show.component.scss'
})
export class ModalFileShowComponent {
  @Input('filesUploaded') filesUploaded: UploadFilesModel = {};
  @Input('idFormalite') idFormalite: number = 0;
  @Input('isLoading') isLoading: boolean = false;
  listFiles: ListFilesModel[] = [];
  openModal: boolean = false;
  selectedFile: ListFilesModel | null = null;
  titleModal: string = '';
  filePreviewUrl!: string;
  pdfSrc!: Uint8Array;

  page: number = 1;
  totalPages!: number;
  isLoaded: boolean = false;

  constructor(public demandUploadFilesService: DemandUploadFilesService) {
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
    this.titleModal= 'Detail fichier : ' + fileType.fileName+'('+fileType.typePieceJointe?.libelle+')';

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
