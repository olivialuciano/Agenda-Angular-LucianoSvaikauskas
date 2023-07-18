import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IUser } from '../interfaces/user.interface';
import { BACKEND_URL } from '../constants/backends';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: AuthService) {}

  async getUserDetails(id: number): Promise<IUser> {
    const data = await fetch(BACKEND_URL + '/api/User/' + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return await data.json();
  }

  async editUser(id: number, user: IUser) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL + '/api/User/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  }

  async deleteUser(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/User/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return res.ok;
  }
}
