import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactList: IContact[] = [
    {
      id: 0,
      name: 'John',
      surname: 'Doe',
      email: 'j@gmail.com',
    },
    {
      id: 1,
      name: 'Jane',
      surname: 'Doe',
      email: 'jane@gmail.com',
    },
    {
      id: 2,
      name: 'George',
      surname: 'Smith',
      email: 'gs@gmail.com',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Ejemplo de paso de informacion entre componentes a través del Estado

  comeBackHome(contact: IContact) {
    let navigationExtras = {
      state: {
        data: contact,
      },
    };

    this.router.navigate(['/home'], navigationExtras);
  }
}
