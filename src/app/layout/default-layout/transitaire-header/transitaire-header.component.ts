import {CommonModule, NgIf, NgTemplateOutlet} from "@angular/common";
import {Component, inject, signal, WritableSignal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {
  AvatarComponent,
  BadgeComponent, ButtonDirective,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective, SidebarToggleDirective
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";
import {SvgIconComponent} from "@ngneat/svg-icon";
import {TippyTooltipDirective} from "../../../../directives/tippy-tooltip/tippy-tooltip.directive";
import {KeycloakService} from "keycloak-angular";
import {UserLocalStorageService} from "../../../../services/user-local-storage.service";
import {UserInfosService} from "../../../auth/user-infos.service";

@Component({
    selector: 'app-transitaire-header',
    imports: [
        SvgIconComponent,
        CommonModule,
        AvatarComponent,
        BadgeComponent,
        ContainerComponent,
        DropdownComponent,
        DropdownDividerDirective,
        DropdownHeaderDirective,
        DropdownItemDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        HeaderNavComponent,
        HeaderTogglerDirective,
        IconDirective,
        NavItemComponent,
        NavLinkDirective,
        NgTemplateOutlet,
        RouterLink,
        RouterLinkActive,
        SidebarToggleDirective,
        ButtonDirective,
        NgIf,
        TippyTooltipDirective
    ],
    templateUrl: './transitaire-header.component.html',
    styleUrl: './transitaire-header.component.scss'
})
export class TransitaireHeaderComponent  {
  notifCounter: WritableSignal<number> = signal<number>(0);
  notifications: WritableSignal<any> = signal<Notification[]>([]);
  userInfosService = inject(UserInfosService);

  userInfos = this.userInfosService.userInfos$;
  keyCloakService = inject(KeycloakService);

  tabs: {id: string, label: string, link?: string}[] = [
    {id: 'declarations', label: 'Déclarations',link: '/declarations/list'},
    {id: 'camions', label: 'Camions', link: '/camions'}
  ];

  activeTab: string = this.tabs[0].id;



  logout() {
    localStorage.clear()
    this.keyCloakService.logout();
  }

}
