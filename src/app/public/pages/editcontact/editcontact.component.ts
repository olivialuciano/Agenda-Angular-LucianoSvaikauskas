import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.scss'],
})
export class EditcontactComponent implements OnInit {
  groupsData: GroupJsonPlaceholder[] = [];
  constructor(
    private gs: GroupService,
    // private cc: ContactsComponent,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    this.groupsData = await this.gs.getGroup(); //rellena ContactData con todos los contactos de una agenda
  }

  // @Input() contact: ContactJsonPlaceholder = {
  //   //recibe los datos del contacto
  //   id: 0,
  //   nombre: '',
  //   telefono: '',
  //   celular: '',
  //   descripcion: '',
  // };
}
