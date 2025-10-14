import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, finalize, Observable, throwError} from "rxjs";
import {map} from "rxjs/operators";
import {AirStockageModel} from "../../../models/air-stockage.model";
import {PaysModel} from "../../../models/pays.model";
import {SitePesageModel} from "../../../models/site-pesage.model";
import {TransporteurModel} from "../../../models/transporteur.model";
import {HttpSharedService} from "./http-shared.service";
import {CamionModel} from "../../../models/camion.model";
import {MarchandiseModel} from "../../../models/marchandise.model";
import {UserModel} from "../../../models/user.model";
import {ChargeurModel} from "../../../models/chargeur.model";
import {DeclarationFretModel} from "../../../models/declaration-fret.model";
import {PaiementModel} from "../../../models/paiement.model";
import {NationaliteModel} from "../../../models/nationalite.model";
import {ParametrageModel} from "../../../models/parametrage.model";
import _ from "lodash";
import {ManutentionnaireModel} from "../../../models/manutentionnaire.model";
import {BlDetailsModel} from "../../../models/bl-details.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  httpSharedService = inject(HttpSharedService);
  isLoadingSubject!: BehaviorSubject<boolean>;

  getTransporteurs(): Observable<TransporteurModel[]> {
    return this.httpSharedService.getTransporteurs().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getNationalites(): Observable<NationaliteModel[]> {
    return this.httpSharedService.getNationalites().pipe(
      map((res) => res),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getUrlBonChargementFileByIdAffretementCamion(idAffretementCamion: number): Observable<string> {
    return this.httpSharedService.getUrlBonChargementFileByIdAffretementCamion(idAffretementCamion).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
    );
  }

  getPaysByNationalite(nationalite: string): Observable<string> {
    return this.getNationalites().pipe(
      map((res) => {
        return _.upperCase(res.find((nat) => nat.nationalite === nationalite)?.pays) ?? "";
      }),
      catchError((err) => {
        return throwError(() => err);
      }),
    );
  }

  getPays(): Observable<PaysModel[]> {
    return this.httpSharedService.getPays().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getSitesPesage(): Observable<SitePesageModel[]> {
    return this.httpSharedService.getSitesPesage().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  getAirStockage(): Observable<AirStockageModel[]> {
    return this.httpSharedService.getAirStockage().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getManutentionnaires(): Observable<ManutentionnaireModel[]> {
    return this.httpSharedService.getManutentionnaires().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getCamionByImmatriculation(immtriculation: string): Observable<CamionModel> {
    return this.httpSharedService.getCamionByImmatriculation(immtriculation).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }


  getMarchandisesByNumConteneur(numero: string): Observable<MarchandiseModel[]> {
    return this.httpSharedService.getMarchandisesByNumConteneur(numero).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getMarchandisesByNumBl(numero: string): Observable<MarchandiseModel[]> {
    return this.httpSharedService.getMarchandisesByNumBl(numero).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getBlDetails(numeroBl: string): Observable<BlDetailsModel> {
    return this.httpSharedService.getDetailsBl(numeroBl).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getMarchandisesByNumChassis(numero: string): Observable<MarchandiseModel[]> {
    return this.httpSharedService.getMarchandisesByNumChassis(numero).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getFilesByLink(link: string, isMinio: boolean = false): Observable<Blob> {
    return this.httpSharedService.getFilesByLink(link, isMinio).pipe();
  }

  getPayementUrl(idDeclaration:number
  ): Observable<PaiementModel> {
    return this.httpSharedService.getPayementUrl(idDeclaration).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getParametrages(): Observable<ParametrageModel[]> {
    return this.httpSharedService.getParametrages().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getPayementBonChargementUrl(idEffretementCamion:number | string
  ): Observable<PaiementModel> {
    return this.httpSharedService.getPayementBonChargementUrl(idEffretementCamion).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getPayementBonEntreeUrl(idAffretement:number | string
  ): Observable<PaiementModel> {
    return this.httpSharedService.getPayementBonEntreeUrl(idAffretement).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getPayementPenaliteUrl(numBonEntree:number | string
  ): Observable<PaiementModel> {
    return this.httpSharedService.getPayementPenaliteUrl(numBonEntree).pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getUserProfile(): Observable<UserModel> {
    return this.httpSharedService.getUserProfile().pipe(
      map((res) => {
        console.log("resProfile", res);
        return res.data;
      }),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getUserChargeurProfile(): Observable<UserModel> {
    return this.httpSharedService.getUserChargeurProfile().pipe(
      map((res) => {
        console.log("resProfile", res);
        return res.data;
      }),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getChargeurs(): Observable<ChargeurModel[]> {
    return this.httpSharedService.getChargeurs().pipe(
      map((res) => res.data),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
