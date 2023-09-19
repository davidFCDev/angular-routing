import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');

    if (token) {
      this.router.navigate(['/home']);
    }
  }

  loginUser() {

    this.authService.login('eve.holt@reqres.in', '12345').subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/contacts']);
      },
      (error) => {
        console.log(error);
      }
    );

    sessionStorage.setItem('token', '123456789');
    this.router.navigate(['/contacts']);
  }
}
