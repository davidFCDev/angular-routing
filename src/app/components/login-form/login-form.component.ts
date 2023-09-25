import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  // Inicializamos vacío el FormGroup
  loginForm: FormGroup = new FormGroup({});

  // Inyectamos el FormBuilder en el constructor
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  // Creamos los getters para acceder a los campos del formulario
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Creamos el método onSubmit para enviar el formulario
  onSubmit() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      // TODO petición al servidor
      this.loginForm.reset();
    }
  }
}
