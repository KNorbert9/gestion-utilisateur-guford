import {
  AsyncPipe,
  DOCUMENT,
  NgClass,
  TitleCasePipe,
  ViewportScroller,
} from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ContainerComponent } from '@coreui/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// import {KeycloakProfile} from "keycloak-js";
import SmoothScroll from 'smooth-scroll';

// import {KeycloakService} from "../../utils/services/keycloak/keycloak.service";
import { CustomHeaderComponent } from '../custom-header/custom-header.component';

import { DefaultFooterComponent } from './';
import { badConsignataireNavItems, badNavItems, INavDataModel } from './_nav';
import { DefaultLayoutService } from './default-layout.service';
import { animate, inView } from 'motion';
import { SvgIconComponent } from '@ngneat/svg-icon';
import colors from 'tailwindcss/colors';
import { UserInfosService } from '../../auth/user-infos.service';
import { GroupeEnum, RoleVBSEnum } from '../../../models/user.model';
import { TippyTooltipDirective } from '../../../directives/tippy-tooltip/tippy-tooltip.directive';
import { SharedService } from '../../shared/services/shared.service';
import { LocalStorageKeyEnum } from '../../../enums/local-storage-key.enum';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,

  imports: [
    NgClass,
    RouterLink,
    ContainerComponent,
    RouterOutlet,
    CustomHeaderComponent,
    TippyTooltipDirective,
    SvgIconComponent,
    AsyncPipe,
    TitleCasePipe,
    DefaultFooterComponent,
  ],
})
export class DefaultLayoutComponent implements OnInit, AfterViewInit {
  public navItems = badNavItems;
  public colors = colors;

  readonly #sharedService = inject(SharedService);
  readonly #userInfosService = inject(UserInfosService);

  @ViewChild('sidebar') sidebar!: ElementRef<HTMLElement>;
  @ViewChildren('liElement') liElement!: QueryList<ElementRef<HTMLElement>>;
  currentRoute: string = localStorage.getItem('currentRoute') ?? '';
  currentNavItem: INavDataModel =
    JSON.parse(localStorage.getItem('activeNavItemDECLAFRET') as string) ??
    this.getFirstNavWithUrl();
  userProfile = JSON.parse(localStorage.getItem('userProfile') as string) ?? {};
  private scroll: any;

  public groupUser = GroupeEnum;
  userInfosService = inject(UserInfosService);

  userInfos = this.userInfosService.userInfos$;

  constructor(
    public defaultLayoutService: DefaultLayoutService,
    private viewportScroller: ViewportScroller,
    private router: Router,
  ) {
    this.navItems = [];
  }

  selectDahboardNavItem() {
    return this.navItems[1];
  }

  async getUserProfile() {
    this.userProfile = localStorage.getItem('user-profile');
    console.log('getUserProfile', this.userProfile);
  }

  getNavItems() {
    let user_profile = JSON.parse(localStorage.getItem('user-profile')!);

    console.log(user_profile);
    if (user_profile.groupe == GroupeEnum.TRANSITAIRES) {
      this.navItems = badNavItems;
    } else if (user_profile.groupe == GroupeEnum.CONSIGNATAIRES) {
      this.navItems = badConsignataireNavItems;
    } else {
      this.navItems = badNavItems;
    }
  }

  getRoleOrGroupName() {
    if (this.userInfos.getValue()?.groupe === GroupeEnum.CONCESSIONNAIRES) {
      return this.userInfos.getValue()?.role;
    }
    return this.userInfos.getValue()?.groupe;
  }

  ngOnInit(): void {
    // this.router.navigate([]);
    // this.getUserProfile();

    // const isLoggedIn = this.#keyCloakService.isLoggedIn();

    // if (isLoggedIn) {
    //   console.log('isLoggedIn', isLoggedIn);
    // this.#sharedService.getUserProfile().subscribe(async (res) => {
    //   console.log('res====user', res);
    //   this.#userInfosService.userInfos = res;
    //   localStorage.setItem(
    //     LocalStorageKeyEnum.USER_PROFILE,
    //     JSON.stringify(res)
    //   );

    //   setTimeout(() => {
    // console.log(this.router.url);
    // this.defaultLayoutService.activateNavItemByUrl(this.router.url);
    // }, 500);
    // this.getNavItems();
    // });
    // }
    // this.openAnimate();
    // console.log('this.tailwindThemes.colors.gray[500]');
  }

  openAnimate() {
    this.defaultLayoutService.sidebarVisibleSubject
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        inView(this.sidebar.nativeElement, (element) => {
          const animatioSide = animate(
            this.defaultLayoutService.sidebarVisibleSubject.value
              ? [
                [
                  this.sidebar.nativeElement,
                  {
                    transform: 'translateX(0%)',
                    width: '19rem',
                    opacity: 1,
                    filter: 'blur(0px)',
                  },
                  { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
                ],
              ]
              : [
                [
                  this.sidebar.nativeElement,
                  {
                    transform: 'translateX(-100%)',
                    width: '0',
                    opacity: 0,
                    filter: 'blur(10px)',
                  },
                  { at: '-0.1' },
                ],
              ]
          );

          return (leaveInfo) => {
            animatioSide.stop();
            console.log('leaveInfo', leaveInfo);
          };
        });
      });
  }

  getFirstNavWithUrl(): any {
    // Loop through the items
    for (const item of badNavItems) {
      if (item.url) {
        return item; // Return the first item that has a 'url'
      }
      // If the item has children, loop through them as well
      if (item.children && item.children.length > 0) {
        for (const child of item.children) {
          if (child.url) {
            return child; // Return the first child that has a 'url'
          }
        }
      }
    }
    return null; // Return null if no item with 'url' is found
  }

  ngAfterViewInit(): void {
    // this.scrollToElement()
  }

  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }

  scrollToElement() {
    const targetElement = document.querySelector(
      ('#' + this.currentNavItem.code) as string
    );
    console.log('targetElement', targetElement);
    if (targetElement) {
      this.scroll = new SmoothScroll();
      this.scroll = this.scroll.animateScroll(targetElement, {
        speed: 800,
        easing: 'easeInOutCubic',
        offset: 50,
      });
    }
  }

  getInitials(name: string | undefined): string {
    if (name === undefined || name === null || name === '') {
      return '';
    }
    const initials = (name as string)
      .split(' ') // Sépare le nom en mots
      .map((word) => word.charAt(0).toUpperCase()) // Prend la première lettre de chaque mot
      .join(''); // Joint les lettres ensemble
    return initials;
  }
}
