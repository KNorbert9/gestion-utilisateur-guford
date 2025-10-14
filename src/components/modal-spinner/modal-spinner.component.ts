import {Component, Input} from '@angular/core';
import {
    ButtonDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent, ModalTitleDirective, SpinnerComponent
} from "@coreui/angular";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-modal-spinner',
  standalone: true,
  imports: [
    ButtonDirective,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    SpinnerComponent,
    LoadingSpinnerComponent
  ],
  templateUrl: './modal-spinner.component.html',
  styleUrl: './modal-spinner.component.scss'
})
export class ModalSpinnerComponent {
  @Input() size: 'sm' | 'lg' | 'xl' | undefined  = 'sm';
  @Input("title") title: string = "En cours de chargement...";
  @Input() visible: boolean = false;
}
