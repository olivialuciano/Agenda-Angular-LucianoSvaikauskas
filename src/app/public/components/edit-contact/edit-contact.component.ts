//ELNUESTROELORIGINAL
// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
// import { GroupService } from 'src/app/services/group.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { ContactcardComponent } from '../contactcard/contactcard.component';

// import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
// import { ContactService } from 'src/app/services/contact.service.service';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-edit-contact',
//   templateUrl: './edit-contact.component.html',
//   styleUrls: ['./edit-contact.component.scss'],
// })
// export class EditContactComponent implements OnInit {
//   //groupsData: GroupJsonPlaceholder[] = [];
//   constructor(
//     // private gs: GroupService,
//     private router: Router,
//     private cs: ContactService
//   ) {}

//   @Input() contactForeditData: ContactJsonPlaceholder = {
//     id: 0,
//     name: '',
//     telephoneNumber: 0,
//     celularNumber: 0,
//     description: '',
//   };

//   // idContactoForEdit: number = this.cs.idContactoForEdit; //toma el valor de idContactoForEdit del contact component

//   ngOnInit(): void {
//     console.log('ON INIT: ', this.contactForeditData);
//     //this.contactForEditData(this.contactForeditData.id!); //al iniciar se ejecuta el metodo contactForEditData con el valor del idContactoForEdit
//   }

//   async getContacto(id: number) {
//     //recibe el id de un contacto
//     const contacto = this.cs.getContactDetails(id); //trae un objeto contacto con todos sus datos
//     console.log('LA FUNCION GETCONTACTO TRAE ESTE CONTACTO: ', contacto);

//     return await contacto;
//   }
//   //, form: NgForm
//   async contactForEditData(id: number) {
//     console.log(id);
//     const contactForEdit = this.getContacto(id); //ejecuta getContacto() con el id del contacto que va a ser editado

//     this.contactForeditData.id = (await contactForEdit).id; //reemplaza todos los valores del contactForeditData con los del contacto buscado
//     (this.contactForeditData.name = (await contactForEdit).name), //para que cuando se abra el form aparezcan todos los datos actuales del contacto
//       (this.contactForeditData.celularNumber = (
//         await contactForEdit
//       ).celularNumber),
//       (this.contactForeditData.telephoneNumber = (
//         await contactForEdit
//       ).telephoneNumber),
//       (this.contactForeditData.description = (
//         await contactForEdit
//       ).description);
//   }

//   async editcontact(id: number, form: NgForm) {
//     // toma  el id y los datos editados del contacto desde el form
//     console.log(form.value);
//     if (this.contactForeditData.id !== undefined) {
//       await this.contactForEditData(this.contactForeditData.id);
//       console.log('contacto id: ', id, ' edit');
//       const contactoeditado = this.cs.editContact(id, this.contactForeditData); //ejecuta el metodo editContact del contact service

//       console.log(
//         "el contacto '",
//         (await contactoeditado).name,
//         "' id:",
//         (await contactoeditado).id,
//         'fue editado correctamente'
//       ); //hace un console.log con los valores devueltos
//     }

//     // async editContactFull(id: number, form: NgForm) {
//     //   //metodo llamado desde el submit del form

//     //   await this.editcontact(form);
//     //   this.cs.abrirContactEdit = 0; //cambia abrirContactEdit del contact componet a 0 para que se cierre el form y se abran las contact card
//     // }
//   }
// }

import { DataSharingService } from 'src/app/shared/DataSharingService';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contactForeditData: ContactJsonPlaceholder = {
    id: 1,
    name: '',
    telephoneNumber: 0,
    celularNumber: 0,
    description: '',
  };

  constructor(
    private cs: ContactService,
    private router: Router,
    private cc: ContactsComponent,
    private dss: DataSharingService
  ) {}
  idContactoForEdit: number = 0; //toma el valor de idContactoForEdit del contact component
  //public idContactEditar = this.ccc.id_contacto_a_editar;

  ngOnInit(): void {
    this.dss.idContactoParaEditar$.subscribe((id) => {
      this.idContactoForEdit = id;
      this.contactForEditData();
    });
  }

  async getContacto() {
    // Recibe el id de un contacto
    const contacto = this.cs.getContactDetails(this.idContactoForEdit);
    return await contacto;
  }

  async contactForEditData() {
    const contactForEdit = this.getContacto();
    this.contactForeditData.id = (await contactForEdit).id;
    this.contactForeditData.name = (await contactForEdit).name;
    this.contactForeditData.telephoneNumber = (
      await contactForEdit
    ).telephoneNumber;
    this.contactForeditData.celularNumber = (
      await contactForEdit
    ).celularNumber;
    this.contactForeditData.description = (await contactForEdit).description;
  }

  async editcontact(form: NgForm) {
    console.log(form.value);
    const contactoeditado = this.cs.editContact(
      this.idContactoForEdit,
      this.contactForeditData
    );
    console.log(
      "El contacto '",
      (await contactoeditado).name,
      "' id:",
      (await contactoeditado).id,
      'fue editado correctamente'
    );
  }

  async editContactFull(form: NgForm) {
    await this.editcontact(form);
    this.router.navigate(['/contacts']);
    console.log('ya podría dejar de mostrarme che');
    this.cc.abrirContactEdit = false;
  }

  noEditContacto() {
    console.log('contacto editado ya está me desaparezco');
    this.cc.abrirContactEdit = false;
  }
}
