import { Injectable } from '@angular/core';
import { CONTACT_LIST } from '../mocks/contactsList.mock';
import { IContact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactsList: IContact[] = CONTACT_LIST;

  constructor() {}

  getContacts(gender?: string): Promise<IContact[] | undefined>{
    if (gender) {
      let filteredList: IContact[] = this.contactsList.filter((contact) => {
        contact.gender == gender;
        return Promise.resolve(filteredList);
      });
    } else {
      return
    }
  }
}
