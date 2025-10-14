import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChevronDown, LucideAngularModule} from "lucide-angular";
import {
  ButtonDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective
} from "@coreui/angular";
import {NgForOf, NgIf} from "@angular/common";


interface SelectOption {
  value: any;
  label: string;
}




@Component({
  selector: 'app-dropi-select',
  imports: [
    DropdownComponent,
    ButtonDirective,
    DropdownToggleDirective,
    LucideAngularModule,
    DropdownItemDirective,
    NgIf,
    NgForOf,
    DropdownMenuDirective
  ],
  templateUrl: './dropi-select.component.html',
  standalone: true,
  styleUrl: './dropi-select.component.scss'
})
export class DropiSelectComponent {
  @Input() options: SelectOption[] = [];
  @Input() value: any;
  @Input() placeholder = 'Sélectionner...';
  @Input() icon: any; // Pour l'icône du bouton


  @Output() valueChange = new EventEmitter<any>();
  @Output() selectedOption = new EventEmitter<SelectOption>();


  ChevronDown = ChevronDown; // Importez l'icône


  get selectedLabel(): string {
    return this.options.find(opt => opt.value === this.value)?.label || '';
  }


  trackByValue(index: number, item: SelectOption): any {
    return item.value;
  }


  onSelect(option: SelectOption): void {
    this.value = option.value;
    this.valueChange.emit(option.value);
    this.selectedOption.emit(option);
  }
}

