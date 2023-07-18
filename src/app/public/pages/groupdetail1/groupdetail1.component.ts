import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groupdetail1',
  templateUrl: './groupdetail1.component.html',
  styleUrls: ['./groupdetail1.component.scss'],
})
export class Groupdetail1Component implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];
  constructor(
    private router: Router,
    private cs: ContactService,
    private gs: GroupService
  ) {}

  @Input() group: GroupJsonPlaceholder = {
    //recibe los datos del grupo
    id: 0,
    name: '',
  };
  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    this.contactsData = await this.cs.getContacts(); //rellena ContactData con todos los contactos de una agenda
  }
  deleteGroup(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del grupo)
    console.log('grupo id: ', id, ' eliminado');
    this.gs.deleteGroup(id); //ejecuta el metodo deleteGroup() del group component
  }
}
