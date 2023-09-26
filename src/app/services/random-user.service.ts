import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IRandomContact } from '../models/randomuser';

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

  getRandomContact(): Observable<any> {
    return this.http
      .get('https://randomuser.me/api')
      .pipe(retry(2), catchError(this.handleError));
  }

  getRandomContacts(n: number): Observable<any> {
    const options: HttpParams = new HttpParams().set('results', n);

    return this.http
      .get('https://randomuser.me/api', { params: options })
      .pipe(retry(2), catchError(this.handleError));
  }

  getRandomContactsByGender(gender: string): Observable<any> {
    const options: HttpParams = new HttpParams().set('gender', gender);

    return this.http
      .get('https://randomuser.me/api', { params: options })
      .pipe(retry(2), catchError(this.handleError));
  }
}
