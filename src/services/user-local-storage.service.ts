import { Injectable } from '@angular/core';
import {LocalStorageKeyEnum} from "../enums/local-storage-key.enum";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  constructor() { }


  get userInfos(): UserModel {
    return JSON.parse(localStorage.getItem(LocalStorageKeyEnum.USER_PROFILE) as string);
  }
}
