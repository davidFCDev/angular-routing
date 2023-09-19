import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      gender: 'male',
    },
    {
      id: 1,
      name: 'Jane',
      surname: 'Doe',
      email: 'jane@gmail.com',
      gender: 'female',
    },
    {
      id: 2,
      name: 'George',
      surname: 'Smith',
      email: 'gs@gmail.com',
      gender: 'male',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      console.log('Query params: ', params.gender);
    });
  }

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
