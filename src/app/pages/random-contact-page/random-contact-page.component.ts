import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/randomuser';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss'],
})
export class RandomContactPageComponent implements OnInit {
  contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {

  }

  getRandomContact() {
    this.randomUserService.getRandomContact().subscribe({
      next: (response: Results) => {
        this.contact = response.results[0];
      },
      error: (error) => console.error(error),
      complete: () => console.log('Completed!'),
    });
  }

  getContactsList(n: number) {
    this.randomUserService.getRandomContacts(n).subscribe({
      next: (response: Results) => {
        console.log(response);
      },
      error: (error) => console.error(error),
      complete: () => console.log('Completed!'),
    });
  }
}
