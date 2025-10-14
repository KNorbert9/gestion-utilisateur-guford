import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../../auth/base-http.service";
import { Observable } from "rxjs";
import { HttpResponseModel } from "../../../../models/http-response.model";

@Injectable({
    providedIn: 'root'
})

export class HttpAppService extends BaseHttpService {

    constructor(private http: HttpClient) {
        super();
    }

    getAllApplication(): Observable<HttpResponseModel<any>> {
        return this.http.get<HttpResponseModel<any>>(`${this.API_USERS_URL}/applications/list-formulaire`, {
            headers: this.httpHeader(),
            params: {
                // step: step
            }
        });
    }


    showFormality(ref: string): Observable<HttpResponseModel<any>> {
        return this.http.get<HttpResponseModel<any>>(`${this.API_USERS_URL}/applications/list-formalite`, {
            headers: this.httpHeader(),
            params: {
                application: ref
            }
        });
    }
}
