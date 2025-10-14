import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { KeycloakService } from 'keycloak-angular';
import { inject } from '@angular/core';
import {UserLocalStorageService} from "../../services/user-local-storage.service";
import {GroupeEnum} from "../../models/user.model";

export function keycloakGuardService(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
  // const keycloak = inject(KeycloakService);
  const router = inject(Router);
  const userService = inject(UserLocalStorageService);

  return new Promise(async (resolve, reject) => {
    try {
      // const isLoggedIn = await keycloak.isLoggedIn();

      // if (!isLoggedIn) {
      //   await keycloak.login();
      //   return resolve(false); // Empêche l'accès à la route initiale
      // }

      const userGroup = userService.userInfos.groupe;
      console.log(userGroup)

      // Redirection basée sur le groupe de l'utilisateur
      switch (userGroup) {
        case GroupeEnum.TRANSITAIRES:
          await router.navigate(['/declarations/list']);
          console.log("userGroup", userGroup);
          break;
        case GroupeEnum.TRANSITAIRES:
          await router.navigate(['/declarations/list']);
          console.log("userGroup", userGroup);
          break;
        case GroupeEnum.CONCESSIONNAIRES:
          await router.navigate(['/declarations/c-list']);
          break;
        default:
          await router.navigate(['/unauthorized']);
          break;
      }

      resolve(false); // Redirection effectuée, donc on bloque l'accès à la route initiale
    } catch (error) {
      console.error('Error in keycloakGuardService:', error);
      await router.navigate(['/error']); // Page d'erreur générique
      resolve(false);
    }
  });
}
