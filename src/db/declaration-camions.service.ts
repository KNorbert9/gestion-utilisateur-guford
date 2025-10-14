import { Injectable } from '@angular/core';
import {NgxIndexedDBService} from "ngx-indexed-db";
import {FileNameTypePieceJointeModel} from "../app/models/upload-files.model";
import {map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

export type FileStockType = "Edit" | "Create" | "Edit-fret" | "Create-fret-imp" | "Create-fret-exp";

export interface DeclarationCamionsModel {
  id?: number;
  idC?: number;
  data: DataDeclarationCamionsModel;
  idDemand?: number;
  type?: FileStockType;
}

export interface DataDeclarationCamionsModel  {
  idFormalite: number | undefined,
  file: any[],
  filesBlob: Blob[] | undefined,
  filesBase64: string[] | undefined,
  fileNameTypePieceJointe: FileNameTypePieceJointeModel[] | undefined
}


@Injectable({
  providedIn: 'root'
})
export class DeclarationCamionsService {

  constructor(private dbService: NgxIndexedDBService) {}


  add(data: DeclarationCamionsModel) {
    switch (data.type) {
      case "Create":
        return this.getAllByType("Create").pipe(
          switchMap((res) => {
            data.id = 1;
            console.log("res===", res)
            if (res.length > 0) {
              return this.dbService.update('declaration-camions', data);
            }else {
              return this.dbService.add('declaration-camions', data);
            }
          })
        )

      case "Edit":
        return this.getAllByType("Edit").pipe(
          switchMap((res) => {
            data.id = 2;
            console.log("res===", res)
            if (res.length > 0) {
              return this.dbService.update('declaration-camions', data);
            }else {
              return this.dbService.add('declaration-camions', data);
            }
          })
        )
      case "Create-fret-imp":
        return this.getAllByType("Create-fret-imp").pipe(
          switchMap((res) => {
            data.id = 3;
            console.log("res===", res)
            if (res.length > 0) {
              return this.dbService.update('declaration-camions', data);
            }else {
              return this.dbService.add('declaration-camions', data);
            }
          })
        )
      case "Create-fret-exp":
        return this.getAllByType("Create-fret-exp").pipe(
          switchMap((res) => {
            data.id = 4;
            console.log("res===", res)
            if (res.length > 0) {
              return this.dbService.update('declaration-camions', data);
            }else {
              return this.dbService.add('declaration-camions', data);
            }
          })
        )
      default:
        return of({} as DeclarationCamionsModel);
    }

  }



  getAll() {
    return this.dbService.getAll<DeclarationCamionsModel>('declaration-camions');
  }

  getAllByType(type: FileStockType) {
    return this.dbService.getAll<DeclarationCamionsModel>('declaration-camions').pipe(
      map((res) => {
        return res.filter(item => item.type === type);
      })
    )
  }


  get(id: number) {
    return this.dbService.getByKey<DeclarationCamionsModel>('declaration-camions', id);
  }

  update(data: DataDeclarationCamionsModel) {
    return this.dbService.update('declaration-camions', data);
  }

  delete(id: number) {
    return this.dbService.delete('declaration-camions', id);
  }

  deleteAllByType(type: FileStockType) {
    return this.dbService.deleteByKey('declaration-camions', this.getIdNumberByType(type));
  }

  getIdNumberByType(type: FileStockType) {
    switch (type) {
      case "Create":
        return 1;
      case "Edit":
        return 2;
      case "Create-fret-imp":
        return 3;
      case "Create-fret-exp":
        return 4;
      default:
        return 1;
    }
  }
}
