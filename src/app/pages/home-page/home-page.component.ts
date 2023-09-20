import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  token: string | null = null;
  selectedContact: IContact | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Comprobar si existe el token
    this.token = sessionStorage.getItem('token');

    // Leemos del estado del historial de navegación
    if (history.state.data) {
      console.log(history.state.data);
      this.selectedContact = history.state.data;
    }
  }

  navigateToContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        gender: 'all',
      },
    };

    this.router.navigate(['/contacts'], navigationExtras);
  }
}
