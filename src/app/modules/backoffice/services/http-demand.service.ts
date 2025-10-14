import { HttpClient } from "@angular/common/http";
import {BaseHttpService} from "../../../auth/base-http.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpResponseModel} from "../../../../models/http-response.model";
import {DemandModel} from "../../../../models/demand.model";
import {SubmitDemandModel} from "../../../../models/submit-demand.model";

@Injectable({
  providedIn: 'root',
})
export class HttpDemandService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  getDemandFull(
  ): Observable<HttpResponseModel<DemandModel[]>> {
    return this.http.get<HttpResponseModel<DemandModel[]>>(
      `${this.API_USERS_URL}/v1/autorisation/depotage/soumis`,
      {
        headers: this.httpHeader(),
      }
    );
  }

  getDemandParam(etat: string
  ): Observable<HttpResponseModel<DemandModel[]>> {
    return this.http.get<HttpResponseModel<DemandModel[]>>(
      `${this.API_USERS_URL}/v1/autorisation/depotage/soumis`,
      {
        params: {etat},
        headers: this.httpHeader(),
      }
    );
  }

  acceptDemand(submitDemand: SubmitDemandModel): Observable<HttpResponseModel<DemandModel>> {
    return this.http.post<HttpResponseModel<DemandModel>>(
      `${this.API_USERS_URL}/v1/autorisation/depotage/accepterdemande
`,
      submitDemand,
      {
        headers: this.httpHeader(),
      }
    );
  }
}
