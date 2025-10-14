import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { delay, filter, map, tap } from 'rxjs/operators';

import { ColorModeService } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { LocalStorageKeyEnum } from '../enums/local-storage-key.enum';
import { UserInfosService } from './auth/user-infos.service';
import { DefaultLayoutService } from './layout/default-layout/default-layout.service';
import { GroupeEnum, RoleVBSEnum } from '../models/user.model';
import { SharedService } from './shared/services/shared.service';
import { CustomClientHeaderComponent } from '../components/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  template:
    '<router-outlet /><ngx-sonner-toaster position="top-center"></ngx-sonner-toaster>',
  imports: [RouterOutlet, NgxSonnerToaster, CustomClientHeaderComponent],
})
export class AppComponent implements OnInit {
  title = "Demande d'habillitation - GUFORD ministérielle";

  readonly #destroyRef: DestroyRef = inject(DestroyRef);
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #titleService = inject(Title);

  readonly #colorModeService = inject(ColorModeService);
  readonly #iconSetService = inject(IconSetService);
  readonly #sharedService = inject(SharedService);
  readonly #userInfosService = inject(UserInfosService);
  readonly #defaultLayoutService = inject(DefaultLayoutService);

  constructor() {
    this.#titleService.setTitle(this.title);
    // iconSet singleton
    // this.#iconSetService.icons = {...iconSubset};
    this.#colorModeService.localStorageItemName.set(
      'coreui-free-angular-admin-template-theme-default'
    );
    this.#colorModeService.eventName.set('ColorSchemeChange');
  }

  // getUserProfile() {
  //   this.#sharedService.getUserProfile().subscribe((res) => {
  //     localStorage.setItem(LocalStorageKeyEnum.USER_PROFILE, JSON.stringify(res));
  //     console.log('res====user', res);
  //   });
  // }

  async ngOnInit() {
    // const isLoggedIn = this.#keyCloakService.isLoggedIn();

    // if (isLoggedIn) {
    //   console.log('isLoggedIn', isLoggedIn);
    //   this.#sharedService.getUserProfile().subscribe(async (res) => {
    //     console.log('res====user', res);
    //     this.#userInfosService.userInfos = res;
    //     localStorage.setItem(
    //       LocalStorageKeyEnum.USER_PROFILE,
    //       JSON.stringify(res)
    //     );
    //     switch (res.groupe) {
    //       case GroupeEnum.TRANSITAIRES:
    //         console.log('transit', res.groupe);
    //         if (this.#router.url.includes('declarant')) {
    //           // this.#defaultLayoutService.activateNavItemByUrl(this.#router.url);
    //           await this.#router.navigate([this.#router.url]);
    //         } else {
    //           // this.#defaultLayoutService.activateNavItemByUrl(this.#router.url);
    //           await this.#router.navigate(['/declarant']);
    //         }
    //         break;
    //       case GroupeEnum.CONSIGNATAIRES:
    //         console.log('consign', res.groupe);
    //         if (this.#router.url.includes('consignataire')) {
    //           // this.#defaultLayoutService.activateNavItemByUrl(this.#router.url);
    //           await this.#router.navigate([this.#router.url]);
    //         } else {
    //           // this.#defaultLayoutService.activateNavItemByUrl(this.#router.url);
    //           await this.#router.navigate(['/consignataire']);
    //         }
    //         break;
    //       default:
    //         console.log('errrrrrrr', res.groupe);
    //         await this.#router.navigate(['/unauthorized']);
    //         break;
    //     }
    //   });
    // } else {
    //   // await this.#keyCloakService.login();
    // }

    // this.#router.events
    //   .pipe(takeUntilDestroyed(this.#destroyRef))
    //   .subscribe((evt) => {
    //     if (!(evt instanceof NavigationEnd)) {
    //       // Redirection basée sur le groupe de l'utilisateur

    //       return;
    //     }
    //   });

    // this.#activatedRoute.queryParams
    //   .pipe(
    //     delay(1),
    //     map((params) => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
    //     filter((theme) => ['dark', 'light', 'auto'].includes(theme)),
    //     tap((theme) => {
    //       this.#colorModeService.colorMode.set(theme);
    //     }),
    //     takeUntilDestroyed(this.#destroyRef)
    //   )
    //   .subscribe();
  }
}
