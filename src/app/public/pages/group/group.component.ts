import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groupsData: GroupJsonPlaceholder[] = []; //lista con la cual itera el ngfor en el html
  constructor(private gs: GroupService, private router: Router) {}
  idGroupForEdit: number = 0; //este dato llega desde la contact card y es utilizado por el edit contact component

  abrirGroupEdit: number = 0; //0 contact card,1 editar contacto

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    this.groupsData = await this.gs.getGroup(); //rellena ContactData con todos los contactos de una agenda
  }
  async deleteGroup(groupId: number): Promise<void> {
    //se ejecuta desde la contact card?????????????????????
    await this.gs.deleteGroup(groupId);
  }

  agregargroup() {
    this.router.navigate(['/newgroup']);
  }
}
