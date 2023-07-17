import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backends';
import { GroupJsonPlaceholder } from '../interfaces/group.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private auth: AuthService) {}

  async getGroupDetails(id: number): Promise<GroupJsonPlaceholder> {
    const data = await fetch(BACKEND_URL + '/api/Group/' + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`, ////******************* */
      },
    });
    return await data.json();
  }

  async getGroup(): Promise<GroupJsonPlaceholder[]> {
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
    //: Promise<GroupJsonPlaceholder>
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
    //console.log(res.json())
  }

  async AssignContact(
    id: number,
    group: GroupJsonPlaceholder
  ): Promise<GroupJsonPlaceholder> {
    //: Promise<GroupJsonPlaceholder>
    console.log(group);
    const res = await fetch(
      BACKEND_URL + '/api/Group' + id + '/assign-contact',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
        body: JSON.stringify(group),
      }
    );
    return await res.json();
    //console.log(res.json())
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
}
