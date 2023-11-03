import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { ContactService } from 'src/app/services/contact.service.service';
import { DataSharingService } from 'src/app/shared/DataSharingService';
@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.scss'],
})
export class ContactcardComponent implements OnInit {
  constructor(
    private cc: ContactsComponent,
    private router: Router,
    private cs: ContactService,
    private route: ActivatedRoute,
    private dss: DataSharingService
  ) {}

  @Input() contact: ContactJsonPlaceholder = {
    //recibe los datos del contacto
    id: 0,
    name: '',
    celularNumber: 0,
    telephoneNumber: 0,
    description: '',
  };
  id: number | undefined;
  public id_contacto_a_editar: number = 0;

  ngOnInit(): void {}

  async getContact(id: number) {
    //recibe el id de un contacto
    const contactoo = this.cs.getContactDetails(id); //trae un objeto contacto con todos sus datos
    return await contactoo;
  }

  deleteContacto(id: number) {
    console.log('contacto id: ', id, ' eliminado');
    this.cc.deleteContacto(id); //ejecuta el metodo deleteContacto() del contact component en el botón
    this.router.navigate(['/contacts']);
  }

  editContacto(id: number) {
    console.log('contacto id: ', id, ' edit');
    this.cc.idContactoForEdit = id; //cambia el valor de idContactoForEdit en el contact component
    this.cc.abrirContactEdit = true;
    this.id_contacto_a_editar = id;
    this.dss.setIdContactoParaEditar(id);
    console.log(
      'presionado boton editar y capturado contacto con id (con la nueva variable): ',
      this.id_contacto_a_editar
    );
    //cambia el valor de abrirContactEdit en el contact component por 1 para q se cierre las contact-card y se abra el edit-form
  }
}
