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

  constructor(private cs: ContactService, private router: Router, private auth:AuthService, private route: ActivatedRoute) {}
  
  contactsData: ContactJsonPlaceholder[] = []; //lista con la cual itera el ngfor en el html

  idContactoForEdit: number = 0; //este dato llega desde la contact card y es utilizado por el edit contact component

  abrirContactEdit: number = 0; //0 contact card,1 editar contacto

  
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
}
