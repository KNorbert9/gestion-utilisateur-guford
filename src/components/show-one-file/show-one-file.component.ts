import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonDirective} from "@coreui/angular";
import {GeneralModalComponent} from "../general-modal/general-modal.component";
import {LoadingBarComponent} from "../loading-bar/loading-bar.component";
import {NgIf} from "@angular/common";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {ListFilesModel} from "../../app/models/list-files.model";
import {ListShowFilesService} from "../list-show-files/list-show-files.service";
import {UntilDestroy} from "@ngneat/until-destroy";


@UntilDestroy()
@Component({
  selector: 'app-show-one-file',
  standalone: true,
    imports: [
        ButtonDirective,
        GeneralModalComponent,
        LoadingBarComponent,
        NgIf,
        PdfViewerModule
    ],
  templateUrl: './show-one-file.component.html',
  styleUrl: './show-one-file.component.scss'
})
export class ShowOneFileComponent implements OnInit {

 @Input("openModal") openModal: boolean = false;
  @Input("haveConfirmButton") haveConfirmButton: boolean = false;
  @Input("src") src: string = 'http://102.164.230.196:4300/FORMALITE_201_AUTORISATION_ENLEVEMENT-4.pdf';
  selectedFile: ListFilesModel | null = null;
  @Input("titleModal") titleModal: string = 'BON DE CHARGEMENT';

  @Output("onConfirm") onConfirm: EventEmitter<any> = new EventEmitter();
  @Output("onClose") onClose: EventEmitter<any> = new EventEmitter();

  page: number = 1;
  totalPages!: number;
  isLoaded: boolean = false;
  pdfSrc!: Uint8Array;

  urlPdf: string = '';
  isPdf: boolean = true;
  fileType: string = '';


  constructor(private listShowFilesService: ListShowFilesService, private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {

  }

  onConfirmAction() {
    this.onConfirm.emit();
  }

  onCloseAction() {
    this.openModal = false;
    this.onClose.emit();
  }

  private checkFileType(url: string) {
    this.isLoaded = false;
    this.fileType = '';
    this.listShowFilesService.determineFileType(url).subscribe((type) => {
      this.isLoaded = true;
      console.log(type);
      this.fileType = type
    });
  }

  onOpenModal(file: ListFilesModel) {
    this.page = 1;
    this.totalPages = 1;
    this.selectedFile = file;
    // this.checkFileType(this.selectedFile.urlPj);
    console.log(this.selectedFile);
    // this.titleModal = 'Detail fichier : ' + this.selectedFile?.nomOriginePieceJointe;
    this.openModal = true;
  }

  onCloseModal() {
    this.openModal = false;
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }


  getPDF(file: ListFilesModel) {
    this.page = 1;
    this.totalPages = 1;
    this.listShowFilesService.downloadFileByUrl(file.nomOriginePieceJointe).subscribe((res) => {
      const tempBlob = new Blob([res as Blob], { type: 'application/pdf' });
      /*this.filePreviewUrl = URL.createObjectURL(
        new File([res as Blob], file.nomOriginePieceJointe as string, { type: 'application/pdf' }),
      );*/

      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.pdfSrc = new Uint8Array(fileReader.result as ArrayBuffer);
        // this.onOpenModal(file);
        this.onOpenModal(file);

      };
      fileReader.readAsArrayBuffer(tempBlob);
    });
    /*this.listShowFilesService.getPDF(file.urlPj).subscribe((res) => {
      const blob = new Blob([res], {type: "application/pdf"});
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${'olivier'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });*/
  }

  openPdf(id: number) {
    window.open(`/api/files/${id}`, "_blank");
  }

}
