import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ContactService } from 'src/app/services/contact.service.service';
import { DataSharingService } from 'src/app/shared/DataSharingService';
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
    private route: ActivatedRoute,
    private dss: DataSharingService
  ) {}
  contactsData: ContactJsonPlaceholder[] = [];

  idContactoForEdit: number = 0;

  abrirContactEdit: boolean = false;

  ngOnInit(): void {
    this.getData();

    // Suscribirse al evento de contacto editado
    this.dss.contactoEditado$.subscribe(() => {
      this.getData(); // Vuelve a cargar los contactos después de la edición
    });
  }

  async getData(): Promise<void> {
    this.contactsData = await this.cs.getContacts();
  }

  async deleteContacto(contactoId: number): Promise<void> {
    await this.cs.deleteContact(contactoId);
    // Actualizar la lista después de eliminar
    this.contactsData = await this.cs.getContacts();
    // Navegar después de actualizar la lista
    this.router.navigate(['/contacts']);
  }

  agregarcontacto() {
    this.router.navigate(['/newcontact']);
  }

  editContacto(id: number) {
    console.log('contacto id: ', id, ' editjajajajjajajajajja');
    this.abrirContactEdit = true;
  }
}
