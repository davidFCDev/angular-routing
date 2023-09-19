import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  genderFilter: string = 'all'; // Variable para filtrar por género
  contactsList: IContact[] = []; // Lista de contactos

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    //Obtenemos las query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('Query params: ', params.gender);
      if (params.gender) {
        this.genderFilter = params.gender;
      }
    });

    // Obtenemos la lista de contactos
    this.contactService
      .getContacts(this.genderFilter)
      ?.then((list) => (this.contactsList = list))
      .catch((error) => console.log(error));
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
