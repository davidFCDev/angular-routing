import { Component, OnInit } from '@angular/core';

import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/randomuser';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  randomResults: Results | undefined;
  randomContact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit() {
    this.randomUserService.getRandomContact().subscribe((response: Results) => {
      this.randomContact = response.results[0];
      console.table(this.randomContact);
    });
  }

}


