import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AirStockageModel} from "../../../models/air-stockage.model";
import {HttpResponseModel} from "../../../models/http-response.model";
import {PaysModel} from "../../../models/pays.model";
import {SitePesageModel} from "../../../models/site-pesage.model";
import {TransporteurModel} from "../../../models/transporteur.model";
import {CamionModel} from "../../../models/camion.model";
import {MarchandiseModel} from "../../../models/marchandise.model";
import {UserModel} from "../../../models/user.model";
import {ChargeurModel} from "../../../models/chargeur.model";
import {DeclarationFretModel} from "../../../models/declaration-fret.model";
import {PaiementModel} from "../../../models/paiement.model";
import {NationaliteModel} from "../../../models/nationalite.model";
import {ParametrageModel} from "../../../models/parametrage.model";
import {ManutentionnaireModel} from "../../../models/manutentionnaire.model";
import {BlDetailsModel} from "../../../models/bl-details.model";
import {BaseHttpService} from "../../auth/base-http.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpSharedService extends BaseHttpService {

  private jsonUrl = "assets/mock/nationalite.json";

  constructor(private http: HttpClient) {
    super();
  }

  getTransporteurs(): Observable<HttpResponseModel<TransporteurModel[]>> {
    return this.http.get<HttpResponseModel<TransporteurModel[]>>(`${this.API_USERS_URL}/transporteurs/liste`, {
      headers: this.httpHeader()
    });
  }

  getPays(): Observable<HttpResponseModel<PaysModel[]>> {
    return this.http.get<HttpResponseModel<PaysModel[]>>(`${this.API_USERS_URL}/msw/pays/liste`, {
      headers: this.httpHeader()
    });
  }

  getSitesPesage(): Observable<HttpResponseModel<SitePesageModel[]>> {
    return this.http.get<HttpResponseModel<SitePesageModel[]>>(`${this.API_USERS_URL}/site-pesage/liste`, {
      headers: this.httpHeader()
    });
  }

  getAirStockage(): Observable<HttpResponseModel<AirStockageModel[]>> {
    return this.http.get<HttpResponseModel<AirStockageModel[]>>(`${this.API_USERS_URL}/air-stockage/liste`, {
      headers: this.httpHeader()
    });
  }

  getManutentionnaires(): Observable<HttpResponseModel<ManutentionnaireModel[]>> {
    return this.http.get<HttpResponseModel<ManutentionnaireModel[]>>(`${this.API_USERS_URL}/manutentionnaires/list`, {
      headers: this.httpHeader()
    });
  }

  getUrlBonChargementFileByIdAffretementCamion(idAffretementCamion: number): Observable<HttpResponseModel<string>> {
    return this.http.get<HttpResponseModel<string>>(`${this.API_USERS_URL}/bon-chargements/affretement-camion/${idAffretementCamion}/files`, {
      headers: this.httpHeader()
    });
  }

  getNationalites(): Observable<NationaliteModel[]> {
    return this.http.get<NationaliteModel[]>(this.jsonUrl, {
      headers: this.httpHeader()
    });
  }

  getCamionByImmatriculation(immatriculation:string): Observable<HttpResponseModel<CamionModel>> {
    return this.http.get<HttpResponseModel<CamionModel>>(`${this.API_USERS_URL}/camions/${immatriculation}/prendre`, {
      headers: this.httpHeader()
    });
  }

  getMarchandisesByNumConteneur(numero: string): Observable<HttpResponseModel<MarchandiseModel[]>> {
    return this.http.get<HttpResponseModel<MarchandiseModel[]>>(`${this.API_USERS_URL}/search/numConteneur`, {
      headers: this.httpHeader(),
      params: {
        numConteneur: numero
      }
    });
  }

  getMarchandisesByNumBl(numero: string): Observable<HttpResponseModel<MarchandiseModel[]>> {
    return this.http.get<HttpResponseModel<MarchandiseModel[]>>(`${this.API_USERS_URL}/search/numBl`, {
      headers: this.httpHeader(),
      params: {
        numBl: numero
      }
    });
  }

  getDetailsBl(numBl:string){
    return this.http.get<HttpResponseModel<BlDetailsModel>>(`${this.API_USERS_URL}/bl/${numBl}/info`, {
      headers: this.httpHeader()
    });
  }

  getMarchandisesByNumChassis(numero: string): Observable<HttpResponseModel<MarchandiseModel[]>> {
    return this.http.get<HttpResponseModel<MarchandiseModel[]>>(`${this.API_USERS_URL}/search/numChassis`, {
      headers: this.httpHeader(),
      params: {
        numChassis: numero
      }
    });
  }

  getUserProfile(): Observable<HttpResponseModel<UserModel>> {
    return this.http.get<HttpResponseModel<UserModel>>(`${this.API_USERS_URL}/auth/me`, {
      headers: this.httpHeader()
    });
  }

  getUserChargeurProfile(): Observable<HttpResponseModel<UserModel>> {
    return this.http.post<HttpResponseModel<UserModel>>(`${this.API_USERS_URL}/chargeur/auth`, {}, {
      headers: this.httpHeader()
    });
  }

  getChargeurs(): Observable<HttpResponseModel<ChargeurModel[]>> {
    return this.http.get<HttpResponseModel<ChargeurModel[]>>(`${this.API_USERS_URL}/chargeurs/liste`, {
      headers: this.httpHeader()
    });
  }

  getParametrages(): Observable<HttpResponseModel<ParametrageModel[]>> {
    return this.http.get<HttpResponseModel<ParametrageModel[]>>(`${this.API_USERS_URL}/parametrages/liste`, {
      headers: this.httpHeader()
    });
  }


  getPayementUrl(idDeclaration:number
  ): Observable<HttpResponseModel<PaiementModel>> {
    return this.http.post<HttpResponseModel<PaiementModel>>(
      `${this.API_USERS_URL}/paiements/declaration/${idDeclaration}`,
      {

      },
      {
        headers: this.httpHeader(),
      }
    );
  }

  getFilesByLink(link: string, isMinio: boolean = false) {
    let urlLink = '';
    if(environment.production){
      urlLink = link;
    }else{
      if(isMinio) {
        urlLink = `/file-minio/${this.removeDomainPart(link, true)}`;
      } else {
        urlLink = `/file-other/${this.removeDomainPart(link)}`;
      }
    }
    return this.http.get(`${urlLink}`, {
      headers: this.httpHeader(),
      responseType: 'blob'
    });
  }

  getPayementBonChargementUrl(idEffretementCamion:number | string
  ): Observable<HttpResponseModel<PaiementModel>> {
    return this.http.post<HttpResponseModel<PaiementModel>>(
      `${this.API_USERS_URL}/paiements/bon-chargement/${idEffretementCamion}`,
      {},
      {
        headers: this.httpHeader(),
      }
    );
  }

  getPayementBonEntreeUrl(idAffretement:number | string
  ): Observable<HttpResponseModel<PaiementModel>> {
    return this.http.post<HttpResponseModel<PaiementModel>>(
      `${this.API_USERS_URL}/paiements/bon-entree/${idAffretement}/affretement-camion`,
      {},
      {
        headers: this.httpHeader(),
      }
    );
  }

  getPayementPenaliteUrl(numBonEntree:number | string
  ): Observable<HttpResponseModel<PaiementModel>> {
    return this.http.post<HttpResponseModel<PaiementModel>>(
      `${this.API_USERS_URL}/paiements/bon-entree/${numBonEntree}/penalite`,
      {},
      {
        headers: this.httpHeader(),
      }
    );
  }

  removeDomainPart(url: string, isMinio: boolean = false): string {
    if(isMinio) {
      return url.replace('https://minio-api.guford.com', '');
    } else {
      return url.replace('http://102.164.230.196:4300', '');
    }
  }

}
