import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { ContactService } from 'src/app/services/contact.service.service';
@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.scss'],
})
export class ContactcardComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];
  constructor(
    private cc: ContactsComponent,
    private router: Router,
    private cs: ContactService
  ) {}

  @Input() contact: ContactJsonPlaceholder = {
    //recibe los datos del contacto
    id: 0,
    Name: '',
    CelularNumber: '',
    TelephoneNumber: '',
    Description: '',
  };
  ngOnInit(): void {
    // this.getContactData(this.contact.id);
    // this.getData();
  }

  deleteContacto(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' eliminado');
    this.cc.deleteContacto(id); //ejecuta el metodo deleteContacto() del contact component
  }

  editContacto(id: number) {
    //metodo llamado desde el boton edit del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' edit');
    this.cc.idContactoForEdit = id; //cambia el valor de idContactoForEdit en el contact component
    this.cc.abrirContactEdit = 1;
    //cambia el valor de abrirContactEdit en el contact component por 1 para q se cierre las contact-card y se abra el edit-form
  }

  // async getContactData(id: number): Promise<void> {
  //   this.contact = await this.cs.getContactDetails(id);
  //   //rellena ContactData con todos los contactos de una agenda
  // }
  // async getData(): Promise<void> {
  //   this.contactsData = await this.cs.getContacts(); //rellena ContactData con todos los contactos de una agenda
  // }
}
