import { Injectable } from '@angular/core';
import { CONTACT_LIST } from '../mocks/contactsList.mock';
import { IContact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactsList: IContact[] = CONTACT_LIST;

  constructor() {}

  getContacts(gender?: string): Promise<IContact[]> {
    return new Promise((resolve) => {
      if (gender == 'male' || gender == 'female') {
        const filteredList: IContact[] = this.contactsList.filter(
          (contact) => contact.gender == gender
        );
        resolve(filteredList);
      } else if (gender == 'all') {
        resolve(this.contactsList);
      } else {
        // Si el género no es válido o no se proporciona, resolvemos con un array vacío.
        resolve([]);
      }
    });
  }
}
