import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';

import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { NgForm } from '@angular/forms';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditcontactComponent implements OnInit {
  groupsData: GroupJsonPlaceholder[] = [];

  contactForeditData: ContactJsonPlaceholder = {
    id: 1,
    Name: '',
    TelephoneNumber: '',
    CelularNumber: '',
    Description: '',
  };

  constructor(
    private gs: GroupService,
    private cc: ContactsComponent,
    private router: Router,
    private cs: ContactService
  ) {}
  idContactoForEdit: number = this.cc.idContactoForEdit; //toma el valor de idContactoForEdit del contact component

  ngOnInit(): void {
    this.contactForEditData(this.idContactoForEdit); //al iniciar se ejecuta el metodo contactForEditData con el valor del idContactoForEdit
  }

  async getContacto(id: number) {
    //recibe el id de un contacto
    const contacto = this.cs.getContactDetails(id); //trae un objeto contacto con todos sus datos
    return await contacto;
  }

  async contactForEditData(id: number) {
    const contactForEdit = this.getContacto(id); //ejecuta getContacto() con el id del contacto que va a ser editado

    this.contactForeditData.id = (await contactForEdit).id; //reemplaza todos los valores del contactForeditData con los del contacto buscado
    (this.contactForeditData.Name = (await contactForEdit).Name), //para que cuando se abra el form aparezcan todos los datos actuales del contacto
      (this.contactForeditData.CelularNumber = (
        await contactForEdit
      ).CelularNumber),
      (this.contactForeditData.TelephoneNumber = (
        await contactForEdit
      ).TelephoneNumber),
      (this.contactForeditData.Description = (
        await contactForEdit
      ).Description);
  }

  async editcontact(id: number, form: NgForm) {
    // toma  el id y los datos editados del contacto desde el form
    console.log(form.value);

    const contactoeditado = this.cs.editContact(id, this.contactForeditData); //ejecuta el metodo editContact del contact service

    console.log(
      "el contacto '",
      (await contactoeditado).Name,
      "' id:",
      (await contactoeditado).id,
      'fue editado correctamente'
    ); //hace un console.log con los valores devueltos
  }

  async editContactFull(id: number, form: NgForm) {
    //metodo llamado desde el submit del form

    await this.editcontact(id, form);
    this.cc.abrirContactEdit = 0; //cambia abrirContactEdit del contact componet a 0 para que se cierre el form y se abran las contact card
  }
}
