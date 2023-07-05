import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backends';
import { AgendaJsonPlaceholder } from '../interfaces/agenda.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private auth:AuthService) { }

  // async getAgendas(userId: string): Promise<AgendaJsonPlaceholder[]> {
  //   const data = await fetch(BACKEND_URL+'/api/Agenda/getAgendas/'+ userId);
  //   return await data.json();
  // }

  // async getAgendas(userId: string): Promise<AgendaJsonPlaceholder[]> {
  //   const data = await fetch(BACKEND_URL+'/api/Agenda/getAgendas/'+ userId,{
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Authorization' :  `Bearer ${this.auth.getSession().token!}`
  //     },
  //   });
  //   return await data.json();
  // }

    async getAgendas(): Promise<AgendaJsonPlaceholder[]> {
    const data = await fetch(BACKEND_URL+'/api/Agenda',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return await data.json();
  }

  async addAgenda(agendaid: string) {
    const data = await fetch(BACKEND_URL+'/api/Agenda/'+ agendaid,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return await data.text();
  }

  async editAgenda(agendaid: string, agenda: AgendaJsonPlaceholder): Promise<AgendaJsonPlaceholder> {
    const data = await fetch(BACKEND_URL+'/api/Agenda/edit/'+ agendaid,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(agenda)
    });
    return await data.json();
  }

  async createAgenda(agenda: AgendaJsonPlaceholder) : Promise<number>{ //: Promise<ContactJsonPlaceholder>
    console.log(agenda);
    const res = await fetch(BACKEND_URL+'/api/Agenda', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(agenda)
    });
    return await res.json();
    //console.log(res.json())
  }

  async deleteAgenda(agendaid: string) {
    const data = await fetch(BACKEND_URL+'/api/Agenda/'+ agendaid,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return await data.text();
  }
}
