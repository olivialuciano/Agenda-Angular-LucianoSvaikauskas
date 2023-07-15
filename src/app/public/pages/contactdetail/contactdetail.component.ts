import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.scss'],
})
export class ContactdetailComponent implements OnInit {
  constructor(private cd: ContactsComponent, private router: Router) {}

  @Input() contact: ContactJsonPlaceholder = {
    //recibe los datos del contacto
    id: 0,
    Name: '',
    CelularNumber: '',
    TelephoneNumber: '',
    Description: '',
  };

  ngOnInit(): void {}

  deleteContacto(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del contacto)
    console.log('contacto id: ', id, ' eliminado');
    this.cd.deleteContacto(id); //ejecuta el metodo deleteContacto() del contact component
  }

  editContacto(id: number) {
    //metodo llamado desde el boton edit del html(recibe el id del contacto)
    console.log('contacto id: ', id, ' edit');
    this.cd.idContactoForEdit = id; //cambia el valor de idContactoForEdit en el contact component
    this.cd.abrirContactEdit = 1; //cambia el valor de abrirContactEdit en el contact component por 1 para q se cierre las contactdetaily se abra el editcontact
  }
}
