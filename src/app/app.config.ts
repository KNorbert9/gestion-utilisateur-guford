import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import {DropdownModule, SidebarModule} from '@coreui/angular';
import {IconSetService} from '@coreui/icons-angular';
import {provideSvgIcons} from "@ngneat/svg-icon";
import {routes} from './app.routes';
// import {httpAuthInterceptor} from "./auth/http-auth.interceptor";
import {environment} from "../environments/environment";
// import {KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService} from "keycloak-angular";
import {HashUrlParserService} from "../utils/urls-manager/hash-url-parser.service";
import {dfretDestinationIcon} from "./svg/destination";
import {dfretCamionDeclaIcon} from "./svg/camion-decla";
import {dfretHorizLogoIcon} from "./svg/horiz-logo";
import {dfretTransporterIcon} from "./svg/transporter";
import {dfretDriverIcon} from "./svg/driver";
import {dfretApprentitIcon} from "./svg/apprentit";
import {dfretDeclarantIcon} from "./svg/declarant";
import {dfretDeclaFretIcon} from "./svg/decla-fret";
import {dfretGarantIcon} from "./svg/garant";
import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";
import {dfretFileIcon} from "./svg/file";
import {provideDaterangepickerLocale} from "ngx-daterangepicker-bootstrap";
import {ContentLoaderModule} from "@ngneat/content-loader";
import { fr_FR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(fr);

// const keycloakService = new KeycloakService();

export function initializeApp(hashUrlRedirectionService: HashUrlParserService,init: HashUrlParserService) {

  if(hashUrlRedirectionService.isHashUrl()) {
    return () => hashUrlRedirectionService.redirectHashUrl();
  }
  return () => {};
}

// export function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: environment.keycloak.url,
//         realm: environment.keycloak.realm,
//         clientId: environment.keycloak.clientId,
//       },
//       initOptions: {
//         onLoad: 'check-sso',
//         checkLoginIframe: false,

//         pkceMethod: 'S256',
//         silentCheckSsoRedirectUri:
//           window.location.origin + '/assets/silentCheckSsoRedirectUri.html'
//       },
//       enableBearerInterceptor: true,
//       bearerPrefix: 'Bearer',

//       shouldAddToken: (request) => {
//         const {method, url} = request;

//         const isGetRequest = 'GET' === method.toUpperCase();
//         const acceptablePaths = ['/assets', '/clients/public'];
//         const isAcceptablePathMatch = acceptablePaths.some((path) =>
//           url.includes(path)
//         );

//         return !(isGetRequest && isAcceptablePathMatch);
//       }
//     });
// }

const dbConfig: DBConfig = {
  name: 'fret-db',
  version: 1,
  objectStoresMeta: [
    {
      store: 'files',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        // Par exemple : un champ "fileName", un champ "fileData" pour stocker un Blob ou du base64
        { name: 'fileName', keypath: 'fileName', options: { unique: false } },
        { name: 'fileData', keypath: 'fileData', options: { unique: false } },
      ]
    },
    {
      store: 'declaration-camions',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {name: 'idC', keypath: 'idC', options: { unique: false }},
        {name: 'data', keypath: 'data', options: { unique: false }},
        {name: 'idDemand', keypath: 'idDemand', options: { unique: false }},
        { name: 'type', keypath: 'type', options: { unique: false } },
      ]
    }
  ]
};



export const appConfig: ApplicationConfig = {
  providers: [
    provideSvgIcons([dfretHorizLogoIcon, dfretCamionDeclaIcon,dfretFileIcon , dfretTransporterIcon, dfretDriverIcon, dfretApprentitIcon, dfretDestinationIcon, dfretDeclarantIcon, dfretDeclaFretIcon, dfretGarantIcon]),
    // {
    //   provide: KeycloakService,
    //   useValue: keycloakService
    // },
    provideDaterangepickerLocale({
      separator: ' - ',
      applyLabel: 'Okay',
    }),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService]
    // },
    // {provide: HTTP_INTERCEPTORS, useClass: KeycloakBearerInterceptor, multi: true},
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      //withHashLocation()
    ),
    // importProvidersFrom(SidebarModule,ContentLoaderModule, DropdownModule, KeycloakAngularModule, NgxIndexedDBModule.forRoot(dbConfig)),
    // provideHttpClient(withInterceptors([httpAuthInterceptor])),
    IconSetService,
    provideAnimations(), provideNzI18n(fr_FR), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()
  ]
};
