import {Component, Input} from '@angular/core';
import {StatutPaiementEnum} from "../../enums/statut-paiement.enum";
@Component({
    selector: 'app-statut-paiement',
  standalone: true,
  imports: [],
    templateUrl: './statut-paiement.component.html',
    styleUrl: './statut-paiement.component.scss'
})
export class StatutPaiementComponent {

  @Input('statut') statutPaiement: StatutPaiementEnum | null = null;
  protected readonly StatutPaiementEnum = StatutPaiementEnum;
}
