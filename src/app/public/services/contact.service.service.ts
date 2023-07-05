import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backends';
import { Contact, ContactJsonPlaceholder } from '../interfaces/contact.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private auth:AuthService) {}


  async getContactDetails(id: number): Promise<ContactJsonPlaceholder> {
    const data = await fetch(BACKEND_URL+'/api/Contacto/'+ id,{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await data.json();
  }

  async getContacts(agendaId: number): Promise<ContactJsonPlaceholder[]> {
    const data = await fetch(BACKEND_URL+'/api/Contacto/agenda/'+ agendaId,{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await data.json();
  }

  async editContact(id:number ,contact: ContactJsonPlaceholder) {
    console.log('Enviando edit de usuario a la api');
    const res = await fetch(BACKEND_URL+'/api/Contacto/' + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
  }

  async addContact(contact: ContactJsonPlaceholder) : Promise<ContactJsonPlaceholder>{ //: Promise<ContactJsonPlaceholder>
    console.log(contact);
    const res = await fetch(BACKEND_URL+'/api/Contacto', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(contact)
    });
    return await res.json();
    //console.log(res.json())
  }



  async deleteContact(id:number):Promise<boolean>{
    const res = await fetch(BACKEND_URL+'/api/Contacto/'+id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return res.ok;
  }
}
