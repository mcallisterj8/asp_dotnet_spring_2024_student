import { Injectable } from '@angular/core';
import { Observable, filter, from, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  public observable$: Observable<number> = from([10, 11, 12, 13, 14, 15]);
  constructor() {}

  public getValues(): Observable<number> {
    return this.observable$.pipe(
      tap((val) => {
        console.log('tap initial:', val);
        /**
         * Uncomment the below to see how even if we return from tap() the return
         * value from tap() is ignored because tap() is meant to *only* perform side-effects,
         * and thus anything returned from it is ignored.
         */
        // const retVal = val * 100;
        // console.log('tap retVal:', retVal);
        // return retVal;
      }),
      map((val) => {
        console.log('---------------------------------');
        console.log('map initial:', val);
        const retVal = val * 2;
        console.log('map retVal:', retVal);

        return retVal;
      }),
      filter((val) => {
        console.log('---------------------------------');
        console.log('filter initial:', val);
        console.log('=================================');
        return val % 2 == 0;
      })
    );
  }
}
