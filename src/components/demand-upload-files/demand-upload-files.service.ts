import { Injectable } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {filesize} from 'filesize';

import {BehaviorSubject, catchError, finalize, map, Observable, throwError,} from 'rxjs';
import {TypePieceJointeModel, UploadFilesModel,} from '../../models/upload-files.model';
import {HttpDemandUploadFilesService} from './http-demand-upload-files.service';
import {getBlobFromLocalStorage} from "../../utils/storage/code-decode-BS64";
import {TypePiecesEnum} from "../../enums/type-pieces.enum";

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class DemandUploadFilesService {
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  constructor(private httpCreateService: HttpDemandUploadFilesService) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  getTypePieces(): Observable<TypePieceJointeModel[] | undefined> {
    return this.httpCreateService.getTypePieces().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false)),
    );
  }

  uploadFiles(dataForm: FormData): Observable<{} | undefined> {
    return this.httpCreateService.xendPieces(dataForm).pipe(
      map((res) => res.result),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false)),
    );
  }

  public getJustFileName(file: File) {
    return file.name.split('.')[0];
  }

  public getJustFileExtension(file: File) {
    return file.name.split('.')[1];
  }

  public getJustFileSizeInMB(file: File) {
    return filesize(file.size);
  }

  saveFiles(idFormalite: number,type: TypePiecesEnum, fileUploads: UploadFilesModel) {
    //  Formater les données à send
    const formDataFiles = new FormData();
    const fileNameTypePieceJointe = fileUploads.fileNameTypePieceJointe!.map(
      (fileNameTypePieceJointeElmt: any) => {
        return {
          filename: fileNameTypePieceJointeElmt.fileName,
          idTypePieceJointe: fileNameTypePieceJointeElmt.idTypePieceJointe,
        };
      },
    );

    fileUploads.file!.forEach((file: File, index: number) => {
      const realBlob = getBlobFromLocalStorage(
        fileUploads.filesBase64![index],
      );
      console.log('realBlob', realBlob);
      formDataFiles.append(
        'file',
        new File(
          [realBlob as Blob],
          fileUploads.fileNameTypePieceJointe![index].fileName as string,
          { type: 'application/pdf' }
        ),
      );
    });
    // formDataFiles.append('file',fileUploads.file![0] )
    formDataFiles.append('idFormalite', idFormalite.toString());
    formDataFiles.append('id', idFormalite.toString());
    formDataFiles.append('type', type);
    formDataFiles.append('declarationFret', idFormalite.toString());


    formDataFiles.append(
      'filenameTypePieceJointe',
      JSON.stringify(fileNameTypePieceJointe),
    );

    console.log('formDataFiles', formDataFiles, fileUploads.file![0]);

    //  Call file upload service
    return this.uploadFiles(formDataFiles)
      .pipe(

        untilDestroyed(this),
        catchError((err) => {
          console.log('err', err);
          return throwError(() => err);
        }),
        finalize(() => {
          // localStorage.removeItem('step1AEAA');
          // localStorage.removeItem('step2AEAA');
          // localStorage.removeItem('currentStepAEAA');
          // this.createService.isEndGoBackSubject.next(1);
        }),
      );
  }
}
