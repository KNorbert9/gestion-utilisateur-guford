import {Component, HostBinding, Input} from '@angular/core';
import {cn} from "../../lib/utils";
import {ClassValue} from "clsx";

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {

  @Input('classValue') elementClass:ClassValue = '';

  @Input("title") title: string = "Chargement...";


  protected readonly cn = cn;
}
