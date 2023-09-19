import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');

    if (token) {
      this.router.navigate(['/home']);
    }
  }

  loginUser() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Petición finalizada');
      }
    );
  }
}
