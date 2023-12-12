
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
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
    private dss: DataSharingService,
  ) {}
  idContactoForEdit: number = 0; //toma el valor de idContactoForEdit del contact component
  
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
    this.router.navigate(['/contacts']);
  }

  // async editcontact(form: NgForm) {
  //   console.log(form.value);
  //   const contactoeditado = this.cs.editContact(
  //     this.idContactoForEdit,
  //     this.contactForeditData
  //   );
  //   console.log(
  //     "El contacto '",
  //     (await contactoeditado).name,
  //     "' id:",
  //     (await contactoeditado).id,
  //     'fue editado correctamente'
  //   );
  //   this.router.navigate(['/contacts']);
  // }

  async editcontact(form: NgForm) {
    console.log(form.value);
    const contactoeditado = await this.cs.editContact(this.idContactoForEdit, this.contactForeditData);
  
    if (contactoeditado) {
      console.log(`El contacto '${contactoeditado.name}' id: ${contactoeditado.id} fue editado correctamente`);
    } else {
      console.error('Error al editar el contacto');
    }
  
    this.router.navigate(['/contacts']);
  }
  

  async editContactFull(form: NgForm) {
    await this.editcontact(form);
    console.log('ya podría dejar de mostrarme che');
    this.cc.abrirContactEdit = false;
    // this.router.navigate(['/contacts']);
  }

  noEditContacto() {
    console.log('contacto editado ya está me desaparezco');
    this.cc.abrirContactEdit = false;
    this.router.navigate(['/contacts']);
  }
}
