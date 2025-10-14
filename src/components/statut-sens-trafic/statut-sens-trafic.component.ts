import {Component, Input} from '@angular/core';
import {EtatMarchandiseEnum, SensTrafficEnum, SensTraficValueEnum} from "../../enums/sens-traffic.enum";

@Component({
    selector: 'app-statut-sens-trafic',
  standalone: true,

  imports: [],
    templateUrl: './statut-sens-trafic.component.html',
    styleUrl: './statut-sens-trafic.component.scss'
})
export class StatutSensTraficComponent {
  @Input("type") typeStatut:  "SENS TRAFFIC" | "ETAT MARCHANDISE" = "SENS TRAFFIC";
  @Input('statut') sensTrafic: SensTrafficEnum | EtatMarchandiseEnum | null = null;
  protected readonly sensTraficEnum = SensTrafficEnum;
  protected readonly etatMarchandiseEnum = EtatMarchandiseEnum;
  protected readonly sensTraficValueEnum = SensTraficValueEnum;
}
