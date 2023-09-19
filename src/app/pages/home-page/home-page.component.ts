import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Leemos del estado del historial de navegación
    console.log(history.state.data);
  }

  navigateToContacts(): void {
    this.router.navigate(['/contacts']);
  }
}
