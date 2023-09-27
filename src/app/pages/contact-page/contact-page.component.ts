import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  genderFilter: string = 'all'; // Variable para filtrar por género
  randomContactsList: IRandomContact[] = []; // Lista de contactos aleatorios

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private randomUserService: RandomUserService
  ) {}

  ngOnInit(): void {
    //Obtenemos las query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('Query params: ', params.gender);
      if (params.gender) {
        this.genderFilter = params.gender;

        if (params.gender === 'female' || params.gender === 'male') {
          this.randomUserService.getRandomContactsByGender(10, params.gender).subscribe({
            next: (response: Results) => {
              response.results.forEach(
                (randomContact: IRandomContact, index: number) => {
                  this.randomContactsList.push(randomContact);
                }
              );
              console.log(this.randomContactsList);
            },
            error: (error) => console.error(error),
            complete: () => console.log('Completed!'),
          });
        } else {
          this.randomUserService.getRandomContacts(10).subscribe({
            next: (response: Results) => {
              response.results.forEach(
                (randomContact: IRandomContact, index: number) => {
                  this.randomContactsList.push(randomContact);
                }
              );
              console.log(this.randomContactsList);
            },
            error: (error) => console.error(error),
            complete: () => console.log('Completed!'),
          });
        }
      }
    });
  }

  // Ejemplo de paso de informacion entre componentes a través del Estado

  comeBackHome(contact: IRandomContact) {
    let navigationExtras = {
      state: {
        data: contact,
      },
    };

    this.router.navigate(['/home'], navigationExtras);
  }
}
