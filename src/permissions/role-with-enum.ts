import {SpaceCaslAction, SpaceCaslSubject} from "./use-space-ability";
import {inject} from "@angular/core";
import {UserInfosService} from "../app/auth/user-infos.service";
import {Observable} from "rxjs";

export class UserAbilityClass {
  protected SpaceCaslAction = SpaceCaslAction;
  protected SpaceCaslSubject = SpaceCaslSubject;

  userInfosService = inject(UserInfosService);

  protected ability: Observable<{can: any, cannot: any} | null> = this.userInfosService.userInfosAbility();
}
