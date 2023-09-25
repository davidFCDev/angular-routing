import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRandomContact } from '../models/randomuser';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {

  constructor(private http: HttpClient) {}

  getRandomContact(): Observable<any> {
    return this.http.get('https://randomuser.me/api')
  }

  getRandomContacts(): Observable<IRandomContact[]> {
    return this.http.get<IRandomContact[]>('https://randomuser.me/api/?results=10');
  }
}
