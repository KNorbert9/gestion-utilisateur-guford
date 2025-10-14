import {Component, Input} from '@angular/core';
import {StatutAffretementEnum} from "../../enums/statut-affretement.enum";
import {StatutPaiementEnum} from "../../enums/statut-paiement.enum";

@Component({
  selector: 'app-statut-affretement',
  standalone: true,
  imports: [],
  templateUrl: './statut-affretement.component.html',
  styleUrl: './statut-affretement.component.scss'
})
export class StatutAffretementComponent {
  @Input('statut') statutAffretement: StatutAffretementEnum | null = null;
  protected readonly StatutAffretementEnum = StatutAffretementEnum;
  protected readonly StatutPaiementEnum = StatutPaiementEnum;
}
