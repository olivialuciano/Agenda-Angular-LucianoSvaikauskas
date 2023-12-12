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
    private dss: DataSharingService,
  ) {}

  @Input() contact: ContactJsonPlaceholder = {
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
    const contactoo = this.cs.getContactDetails(id);
    return await contactoo;
  }

  // async deleteContacto(id: number) {
  //   console.log('contacto id: ', id, ' eliminado');
  //   await this.cc.deleteContacto(id);
  //   this.router.navigate(['/contacts']);
  // }
  async deleteContacto(id: number): Promise<void> {
    console.log('contacto id: ', id, ' eliminado');
    await this.cc.deleteContacto(id);
    // No navegues aquí; deja que el componente padre maneje la navegación después de actualizar la lista
  }
  
  

  editContacto(id: number) {
    console.log('contacto id: ', id, ' edit');
    this.cc.idContactoForEdit = id;
    this.cc.abrirContactEdit = true;
    this.id_contacto_a_editar = id;
    this.dss.setIdContactoParaEditar(id);
    console.log(
      'presionado boton editar y capturado contacto con id (con la nueva variable): ',
      this.id_contacto_a_editar
    );
  }
}
