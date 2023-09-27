import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Results } from '../models/randomuser';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getRandomContact(): Observable<Results> {
    return this.http
      .get<Results>('https://randomuser.me/api')
      .pipe(retry(2), catchError(this.handleError));
  }

  getRandomContacts(n: number, gender?: string): Observable<Results> {
    let options: HttpParams = new HttpParams().set('results', n);

    if (gender) {
      options = options.append("gender", gender);
    }

    return this.http
      .get<Results>('https://randomuser.me/api', { params: options })
      .pipe(retry(2), catchError(this.handleError));
  }
}
