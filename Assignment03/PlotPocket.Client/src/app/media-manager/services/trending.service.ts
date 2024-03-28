import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private _http = inject(HttpClient); // Will make async requests to server.

  private _trendingListSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);

  public trendingList$: Observable<Show[] | []> = this._trendingListSubject.asObservable();

  constructor() { }

  public getAllTrending(): void {
    this._http.get<Show[]>(`/api/trending`).subscribe(showList => {
      this._trendingListSubject.next(showList);
    });
  }

  // public getAllTrending(): Observable<Show[]> {
    
  //   return this._http.get<Show[]>(`/api/trending`);      
  // }

}
