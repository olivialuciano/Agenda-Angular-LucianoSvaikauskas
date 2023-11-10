import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backends';
import { AllGroup, GroupJsonPlaceholder, iGroupandContact } from '../interfaces/group.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private auth: AuthService) {}

  async getGroupDetails(id: number): Promise<AllGroup> {
    const data = await fetch(BACKEND_URL + '/api/Group/' + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`, ////******************* */
      },
    });
    return await data.json();
  }

  async getGroup(): Promise<AllGroup[]> {
    const data = await fetch(BACKEND_URL + '/api/Group', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`, ////******************* */
      },
    });
    return await data.json();
  }

  async editGroup(id: number, group: GroupJsonPlaceholder) {
    console.log('Enviando edit de grupo a la api');
    const res = await fetch(BACKEND_URL + '/api/Group/' + id + '/update-name', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(group),
    });
    return await res.json();
  }

  async addGroup(group: GroupJsonPlaceholder): Promise<GroupJsonPlaceholder> {
    console.log(group);
    const res = await fetch(BACKEND_URL + '/api/Group', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(group),
    });
    return await res.json();
  }

  async AssignContact(
    grupo: iGroupandContact) {
    console.log(grupo);
    const res = await fetch(
      BACKEND_URL + '/api/Group/' + grupo.groupId + '/assign-contact',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
        body: JSON.stringify(grupo),
      }
    );
    console.log(grupo.groupId)
    return await res.json();
  }

  async deleteGroup(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/Group/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return res.ok;
  }

  async addtogroup(grupo: iGroupandContact) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL + '/api/Group/' + grupo.groupId + '/assign-contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(grupo),
    });
    return await res.json();
  }
}
