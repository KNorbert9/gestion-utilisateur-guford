import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonDirective, SpinnerComponent} from "@coreui/angular";
import {ButtonTypeEnum} from "../../enums/button-type.enum";
import {cn} from "../../lib/utils";
import {ClsxDirective} from "../../directives/clsx.directive";
import {ClassValue} from "clsx";
import {CommonModule} from "@angular/common";


export type ButtonType = "primary" | "secondary" | "default"


@Component({
  selector: 'app-button-loader',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent,
    ClsxDirective,
    ButtonDirective
  ],
  templateUrl: './button-loader.component.html',
  styleUrl: './button-loader.component.scss'
})
export class ButtonLoaderComponent {
  @Input('isLoading') isLoading: boolean = false;
  @Input('type') type: ButtonType = "primary";
  @Input('disabled') disabled: boolean = false;
  @Output('clickBtn') click = new EventEmitter<void>();
  @Input('class') class: string = "";


  onConfirmClick() {
    this.click.emit();
  }

  getClass(classInpt:string): ClassValue[]{
    return [classInpt, this.class];
  }
}
