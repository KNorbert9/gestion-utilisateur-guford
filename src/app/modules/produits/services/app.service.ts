import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, catchError, finalize, map, Observable, throwError } from "rxjs";
import { HttpAppService } from "./http-app.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpAppService = inject(HttpAppService);
  isLoadingSubject!: BehaviorSubject<boolean>;


  getAllApplication(): Observable<any> {
    return this.httpAppService.getAllApplication().pipe(
      map((res) => res.result),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  showFormality(ref: string): Observable<any> {
    return this.httpAppService.showFormality(ref).pipe(
      map((res) => res),
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}  