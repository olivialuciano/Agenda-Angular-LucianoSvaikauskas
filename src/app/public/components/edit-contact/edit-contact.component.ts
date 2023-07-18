//ELNUESTROELORIGINAL
// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
// import { GroupService } from 'src/app/services/group.service';

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

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  @Input() contactForeditData: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    telephoneNumber: 0,
    celularNumber: 0,
    description: '',
  };

  constructor(private router: Router, private cs: ContactService) {}

  ngOnInit(): void {
    if (this.contactForeditData.id !== undefined) {
      this.contactForEditData(this.contactForeditData.id);
    }
  }

  async getContacto(id: number) {
    const contacto = await this.cs.getContactDetails(id);
    return contacto;
  }

  async contactForEditData(id: number) {
    const contactForEdit = await this.getContacto(id);

    this.contactForeditData = { ...contactForEdit };
  }

  async editcontact(contactForeditData: ContactJsonPlaceholder, form: NgForm) {
    if (this.contactForeditData.id !== undefined) {
      await this.contactForEditData(this.contactForeditData.id);
      console.log('contacto id: ', contactForeditData.id, ' edit');
      const contactoeditado = await this.cs.editContact(
        contactForeditData.id,
        this.contactForeditData
      );

      console.log(
        "el contacto '",
        contactoeditado.name,
        "' id:",
        contactoeditado.id,
        'fue editado correctamente'
      );
    }
  }
}

//CHATGPT
// import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
// import { ContactService } from 'src/app/services/contact.service.service';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-edit-contact',
//   templateUrl: './edit-contact.component.html',
//   styleUrls: ['./edit-contact.component.scss'],
// })
// export class EditcontactComponent implements OnInit {
//   contactForEditData: ContactJsonPlaceholder = {
//     id: 0,
//     name: '',
//     telephoneNumber: '',
//     celularNumber: '',
//     description: '',
//   };

//   constructor(private router: Router, private cs: ContactService) {}

//   ngOnInit(): void {
//     this.getContactForEditData();
//   }

//   async getContactForEditData() {
//     const contactId = this.cs.idContactoForEdit;
//     const contact = await this.cs.getContactDetails(contactId);
//     this.contactForEditData = contact;
//   }

//   async getContacto(id: number) {
//     const contacto = await this.cs.getContactDetails(id);
//     return contacto;
//   }

//   async contactForEditData1(id: number) {
//     const contactForEdit = await this.getContacto(id);

//     this.contactForEditData.id = contactForEdit.id;
//     this.contactForEditData.name = contactForEdit.name;
//     this.contactForEditData.celularNumber = contactForEdit.celularNumber;
//     this.contactForEditData.telephoneNumber = contactForEdit.telephoneNumber;
//     this.contactForEditData.description = contactForEdit.description;
//   }

//   async editContact(form: NgForm) {
//     if (form.invalid) {
//       return;
//     }

//     console.log('Form value:', form.value);

//     if (typeof this.contactForEditData.id === 'number') {
//       await this.cs.editContact(
//         this.contactForEditData.id,
//         this.contactForEditData
//       );

//       console.log(
//         `El contacto '${this.contactForEditData.name}' con ID ${this.contactForEditData.id} fue editado correctamente`
//       );
//     }
//   }
// }

//NICOINTELANGELO
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
// import { ContactService } from 'src/app/services/contact.service.service';
// import { ContactsComponent } from '../../pages/contacts/contacts.component';

// @Component({
//   selector: 'app-edit-contact',
//   templateUrl: './edit-contact.component.html',
//   styleUrls: ['./edit-contact.component.scss']
// })
// export class EditContactComponent implements OnInit {

//   contactForeditData:ContactJsonPlaceholder = {
//     id: 1,
//     name: '',
//     telephoneNumber: '',
//     celularNumber: '',
//     description: '',
//   };

//   constructor(private cs : ContactService, private router:Router) { }

//   idContactoForEdit: number = this.cs.idContactoForEdit //toma el valor de idContactoForEdit del contact component

//   ngOnInit(): void {
//     this.contactForEditData(this.idContactoForEdit)//al iniciar se ejecuta el metodo contactForEditData con el valor del idContactoForEdit
//   }

//   async getContacto(id:number){  //recibe el id de un contacto
//     const contacto = this.cs.getContactDetails(id); //trae un objeto contacto con todos sus datos
//     return await contacto
//   }

//   async contactForEditData(id: number){
//     const contactForEdit = this.getContacto(id)  //ejecuta getContacto() con el id del contacto que va a ser editado

//     this.contactForeditData.id = (await contactForEdit).id;           //reemplaza todos los valores del contactForeditData con los del contacto buscado
//     this.contactForeditData.name = (await contactForEdit).name,   //para que cuando se abra el form aparezcan todos los datos actuales del contacto
//     this.contactForeditData.telephoneNumber = (await contactForEdit).telephoneNumber,
//     this.contactForeditData.celularNumber = (await contactForEdit).celularNumber,
//     this.contactForeditData.description = (await contactForEdit).description
//   }

//   async editcontact(id:number, form:NgForm){ // toma  el id y los datos editados del contacto desde el form
//     console.log(form.value);

//     const contactoeditado = this.cs.editContact(id, this.contactForeditData); //ejecuta el metodo editContact del contact service

//     console.log("el contacto '",(await contactoeditado).nombre,"' id:",(await contactoeditado).id, "fue editado correctamente"); //hace un console.log con los valores devueltos
//   }

//   async editContactFull(id:number, form:NgForm){ //metodo llamado desde el submit del form
//     await this.editcontact(id, form)

//   }
// }
