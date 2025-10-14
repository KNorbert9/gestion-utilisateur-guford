import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypePiecesEnum} from "../../enums/type-pieces.enum";
import {BaseHttpService} from "../../app/auth/base-http.service";
import {HttpResponseModel} from "../../models/http-response.model";
import {TypePieceJointeModel} from "../../models/upload-files.model";



@Injectable({
  providedIn: 'root'
})
export class HttpDemandUploadFilesService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  getTypePieces(): Observable<HttpResponseModel<TypePieceJointeModel[]>> {
    return this.http.get<HttpResponseModel<TypePieceJointeModel[]>>(`${this.API_USERS_URL}/type-piece/list`, {
      headers: this.httpHeader(),
    });
  }

  xendPieces(formData: FormData): Observable<HttpResponseModel<{}>> {
    return this.http.post<HttpResponseModel<{}>>(`${this.API_USERS_URL}/piece/creation`,formData, {
      headers: this.httpHeaderForFormData()
    });
  }
}
