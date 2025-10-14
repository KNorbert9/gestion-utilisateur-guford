import {Component, inject, signal, WritableSignal} from '@angular/core';
import {
    ButtonDirective,
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective, HeaderNavComponent, NavItemComponent, NavLinkDirective
} from "@coreui/angular";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TippyTooltipDirective} from "../../../../directives/tippy-tooltip/tippy-tooltip.directive";
import {CommonModule} from "@angular/common";
import {KeycloakService} from "keycloak-angular";
import {UserLocalStorageService} from "../../../../services/user-local-storage.service";
import {UserInfosService} from "../../../auth/user-infos.service";

@Component({
  selector: 'app-consignataire-header',
  standalone: true,
    imports: [
      CommonModule,
        ButtonDirective,
        DropdownComponent,
        DropdownItemDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        HeaderNavComponent,
        NavItemComponent,
        NavLinkDirective,
        RouterLink,
        RouterLinkActive,
        TippyTooltipDirective
    ],
  templateUrl: './consignataire-header.component.html',
  styleUrl: './consignataire-header.component.scss'
})
export class ConsignataireHeaderComponent {
  notifCounter: WritableSignal<number> = signal<number>(0);
  notifications: WritableSignal<any> = signal<Notification[]>([]);
  keyCloakService = inject(KeycloakService);
  userInfosService = inject(UserInfosService);

  userInfos = this.userInfosService.userInfos$;

  tabs: {id: string, label: string, link?: string}[] = [
    {id: 'c-camion-declarer', label: 'Camions déclaré(s)',link: '/declarations/lc-list'},
  ];

  activeTab: string = this.tabs[0].id;



  logout() {
    localStorage.clear()
    this.keyCloakService.logout();
  }
}
