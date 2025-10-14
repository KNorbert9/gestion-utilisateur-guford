import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, finalize, Observable, throwError} from "rxjs";

import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import { Location } from "@angular/common";
import {HttpDemandService} from "./http-demand.service";
import {DemandModel} from "../../../../../src/models/demand.model";
import {SubmitDemandModel} from "../../../../../src/models/submit-demand.model";


@Injectable({
  providedIn: 'root',
})
export class DemandService {

  isLoadingSubject!: BehaviorSubject<boolean>;

  currentRouteSubject:BehaviorSubject<string>;
  currentRoute$: Observable<string>;
  isHideDemandBarSubject:BehaviorSubject<boolean>;
  isHideDemandBar$:Observable<boolean>;
  currentDemandsSubject = new BehaviorSubject<DemandModel[]>([]);
  currentDemandSubject = new BehaviorSubject<DemandModel>({} as DemandModel);


  constructor(private router: Router, private location: Location, private httpDemandService: HttpDemandService) {



    this.currentRouteSubject = new BehaviorSubject<string>('');
    this.currentRoute$ = this.currentRouteSubject.asObservable();

    this.isHideDemandBarSubject = new BehaviorSubject<boolean>(false);
    this.isHideDemandBar$ = this.isHideDemandBarSubject.asObservable();

  }

  getDemandFull(): Observable<DemandModel[] | undefined> {
    return this.httpDemandService.getDemandFull().pipe(
      map((res) => res.result),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  getDemandParam(etat: string): Observable<DemandModel[] | undefined> {
    return this.httpDemandService.getDemandParam(etat).pipe(
      map((res) => res.result),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  acceptDemand(submitDemandModel: SubmitDemandModel): Observable<DemandModel | undefined> {
    return this.httpDemandService.acceptDemand(submitDemandModel).pipe(
      map((res) => res.result),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

}
