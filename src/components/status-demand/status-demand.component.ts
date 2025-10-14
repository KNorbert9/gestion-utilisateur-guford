import { Component, Input } from '@angular/core';

import {cn} from "src/utils/app.utils"
import { StatusDemandEnum } from 'src/models/demand.model';

@Component({
  selector: 'app-status-demand',
  templateUrl: './status-demand.component.html',
  standalone: true,
  styleUrl: './status-demand.component.scss'
})
export class StatusDemandComponent {
  @Input('haveIcon') haveIcon: boolean = false;
  @Input('content') content: string = "status";
  @Input('status') status: StatusDemandEnum= StatusDemandEnum.NON_SOUMIS;
  protected readonly cn = cn;
  protected readonly StatusDemandEnum = StatusDemandEnum;


// write function to format the status
  getStatus(status: StatusDemandEnum) {
    switch (status) {
      case StatusDemandEnum.SOUMIS:
        return 'SOUMIS';
      case StatusDemandEnum.ACCEPTER:
        return 'ACCEPTÉ';
      case StatusDemandEnum.VALIDER:
        return 'VALIDÉ';
      case StatusDemandEnum.ETUDE:
        return 'EN ÉTUDE';
        case StatusDemandEnum.INSPECTION:
        return 'EN INSPECTION';
      case StatusDemandEnum.REJETER:
        return 'REJETÉ';
        case StatusDemandEnum.REJETER_COMPLEMENT || StatusDemandEnum.A_COMPLETER:
        return 'REJETÉ COMPLEMENT';
      case StatusDemandEnum.TRAITEMENT:
        return 'TRAITEMENT';
      case StatusDemandEnum.TRAITER:
        return 'TRAITÉ';
      default:
        return 'default';
    }
  }



}


// import {cn} from "../../app/utils/app.utils"
//
//
// @Component({
//   selector: 'app-status-demand',
//   imports: [],
//   templateUrl: './demand-status.component.html',
//   standalone: true,
//   styleUrl: './demand-status.component.scss'
// })
// export class DemandStatusComponent {
//   @Input('haveIcon') haveIcon: boolean = false;
//   @Input('content') content: string = "status";
//   @Input('status') status: StatusDemandEnum= StatusDemandEnum.NON_SOUMIS;
//   protected readonly cn = cn;
//   protected readonly StatusDemandEnum = StatusDemandEnum;
//
//
//   // write function to format the status
//   getStatus(status: StatusDemandEnum) {
//     switch (status) {
//       case StatusDemandEnum.SOUMIS:
//         return 'SOUMIS';
//       case StatusDemandEnum.ACCEPTER:
//         return 'ACCEPTÉ';
//       case StatusDemandEnum.VALIDER:
//         return 'VALIDÉ';
//       case StatusDemandEnum.ETUDE:
//         return 'EN ÉTUDE';
//       case StatusDemandEnum.REJETER:
//         return 'REJETÉ';
//       case StatusDemandEnum.TRAITEMENT:
//         return 'TRAITEMENT';
//       case StatusDemandEnum.TRAITER:
//         return 'TRAITÉ';
//       default:
//         return 'default';
//     }
//   }
// }


