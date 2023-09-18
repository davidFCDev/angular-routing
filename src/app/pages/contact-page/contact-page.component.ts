import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
