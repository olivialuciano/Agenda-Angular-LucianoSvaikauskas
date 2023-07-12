import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  //Hecho usando NgModel
  authData: iAuthRequest = {
    email: '',
    password: '',
  };

  async login(form: NgForm) {
    console.log(form.value);
    const token = await this.auth.login(form.value); //ejecutamos el metodo login de auth service con los datos del form
    if (token) this.router.navigate(['/contacts']); //si recibe el token nos lleva a contactos
  }
}
