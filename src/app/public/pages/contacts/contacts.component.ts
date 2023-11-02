import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ContactService } from 'src/app/services/contact.service.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(
    private cs: ContactService,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}
  contactsData: ContactJsonPlaceholder[] = []; //lista con la cual itera el ngfor en el html

  idContactoForEdit: number = 0; //este dato llega desde la contact card y es utilizado por el edit contact component

  abrirContactEdit: boolean = false; //0 contact card,1 editar contacto

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    this.contactsData = await this.cs.getContacts(); //rellena ContactData con todos los contactos de una agenda
  }
  async deleteContacto(contactoId: number): Promise<void> {
    //se ejecuta desde la contact card
    await this.cs.deleteContact(contactoId);
  }

  agregarcontacto() {
    this.router.navigate(['/newcontact']);
  }

  // editContacto(id: number) {
  //   //metodo llamado desde el boton edit del html(recibe el id del contacto de esa agenda)
  //   console.log('contacto id: ', id, ' edit');
  //   this.cs.idContactoForEdit = id; //cambia el valor de idContactoForEdit en el contact component
  //   this.cs.abrirContactEdit = 1;
  // }
  editContacto(id: number) {
    //metodo llamado desde el boton edit del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' edit');
    this.abrirContactEdit = true;

    //this.cs.idContactoForEdit = id; //cambia el valor de idContactoForEdit en el contact component
    // cambia el valor de abrirContactEdit en el contact component por 1 para q se cierre las contact-card y se abra el edit-form
  }
}
