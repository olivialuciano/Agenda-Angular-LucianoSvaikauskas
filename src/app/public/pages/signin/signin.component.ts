import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest, iRegisterRequest } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private auth: AuthService, private router: Router) {}

  //Hecho usando NgModel
  registerData: iRegisterRequest = {
    name: '',
    email: '',
    lastname: '',
    password: '',
  };

  async registrarme(form: NgForm) {
    console.log(form.value);
    const user = await this.auth.addUser(form.value); //ejectua addUser del auth service con los valores del form
    if (user) this.router.navigate(['/login']); //cuando nos registramos nos lleva al inicio de sesion
  }
}
