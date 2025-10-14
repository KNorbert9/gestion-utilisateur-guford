import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {LocalStorageKeyEnum} from "../../enums/local-storage-key.enum";
import {useSpaceAbility} from "../../permissions/permissions.type";
import {SpaceCaslAction, SpaceCaslSubject} from "../../permissions/use-space-ability";
import {switchMap} from "rxjs/operators";
import {getPermissionsByRole} from "../../permissions/check-permission";
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserInfosService {

  userInfos$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  constructor() { }

  set userInfos(userInfos: UserModel | null) {
    localStorage.setItem(LocalStorageKeyEnum.USER_PROFILE, JSON.stringify(userInfos));
    this.userInfos$.next(userInfos);
  }

  get userInfos(): UserModel | null {
    return this.userInfos$.value;
  }

  userInfosAbility(): Observable<{can: any, cannot: any} | null> {
    return this.userInfos$.pipe(
      switchMap((userInfos) => {
        if (userInfos) {
          console.log("userInfos", userInfos);
          return of(useSpaceAbility(getPermissionsByRole([userInfos.groupe], userInfos.role)));
        }
        return of(null);
      })
    )
  }
}
