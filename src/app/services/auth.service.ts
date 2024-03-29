import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backends';
import { iAuthRequest, iRegisterRequest } from '../interfaces/auth';
import { ISession } from '../interfaces/session.interface';

import { JwtHelperService } from '@auth0/angular-jwt'; //npm install @auth0/angular-jwt
import { HttpClient } from '@angular/common/http';
import { ContactJsonPlaceholder } from '../interfaces/contact.interface';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn = !!localStorage.getItem('session'); //para que quede la sesión guardada
  }

  async login(authentication: iAuthRequest): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/User/authenticate', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authentication),
    });
    if (!res.ok) return false;
    const token = await res.text();
    console.log(token);

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const sub = decodedToken.sub;
    console.log(sub);

    if (!token) return false;
    this.setSession(token);
    this.setUserId(sub); //guarda el id en el local storage
    return true;
  }

  async addUser(user: iRegisterRequest): Promise<IUser> {
    console.log(user);
    const res = await fetch(BACKEND_URL + '/api/User', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getSession(): ISession {
    const item: string = localStorage.getItem('session') || 'invalid';
    if (item !== 'invalid') {
      this.loggedIn = true;
      return JSON.parse(item);
    }
    return { expiresIn: '', token: '' };
  }

  setUserId(id: string) {
    localStorage.setItem('Id', id);
  }

  setSession(token: any, expiresTimeHours: number = 1) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeHours); //la hora actual+la cantidad de horas validas del token

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token,
    };

    this.loggedIn = true;
    localStorage.setItem('session', JSON.stringify(session));
  }

  async getMe() {
    const res = await fetch('', {
      headers: {
        Authorization: this.getSession().token!,
      },
    });
    return await res.json();
  }

  //hacer boton cerrar sesion e impolementar este método
  resetSession() {
    localStorage.removeItem('session');
    localStorage.removeItem('Id');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  //para poder mostrar los datos del usuario en profile. traemos el id.
  getUserId(): number | null {
    const storedUserId = localStorage.getItem('Id');
    return storedUserId ? +storedUserId : null;
  }
}
