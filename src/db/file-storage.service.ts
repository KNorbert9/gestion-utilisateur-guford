// file-storage.service.ts (VERSION 10+)
import { Injectable } from '@angular/core';
import { NgxIndexedDBService, WithID } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

export interface FileModel {
  fileName: string;
  fileData: Blob | string;
}
export interface FileModelWithId extends FileModel, WithID {}

@Injectable({
  providedIn: 'root',
})
export class FileStorageService {
  constructor(private dbService: NgxIndexedDBService) {}

  // Ajout d’un fichier (Observable<FileModelWithId>)
  addFile(fileItem: FileModelWithId): Observable<FileModelWithId> {
    // Ici, add(...) renvoie déjà un Observable (en v10+),
    // pas besoin de 'from(...)'
    return this.dbService.add<FileModelWithId>('files', fileItem);
  }

  getFileById(id: number): Observable<FileModelWithId> {
    return this.dbService.getByKey<FileModelWithId>('files', id);
  }

  getAllFiles(): Observable<FileModelWithId[]> {
    return this.dbService.getAll<FileModelWithId>('files');
  }

  updateFile(fileItem: FileModelWithId): Observable<FileModelWithId> {
    return this.dbService.update<FileModelWithId>('files', fileItem);
  }

  deleteFile(id: number): Observable<FileModelWithId[]> {
    // Selon la v10 de ngx-indexed-db, delete(...) renvoie un Observable<void>
    return this.dbService.delete<FileModelWithId>('files', id);
  }
}
