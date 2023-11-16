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

  authData: iAuthRequest = {
    email: '',
    password: '',
  };

  async login(form: NgForm) {
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if (token) this.router.navigate(['/contacts']);
  }
}
