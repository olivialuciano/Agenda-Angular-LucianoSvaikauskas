import { Component, Input, OnInit } from '@angular/core';

import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss'],
})
export class GroupCardComponent implements OnInit {
  constructor(private router: Router, private gs: GroupService) {}

  @Input() group: GroupJsonPlaceholder = {
    id: 0,
    name: '',
  };
  ngOnInit(): void {}

  isEditing = false;

  eliminarGrupo(id: number) {
    console.log('grupo id: ', id, ' eliminado');
    this.gs.deleteGroup(id);
    this.router.navigate(['/group']);
  }

  async getGrupo(id: number) {
    const grupo = this.gs.getGroupDetails(id);
    return await grupo;
  }

  async editgroup(id: number, group: any, form: NgForm) {
    console.log(form.value);

    const grupoeditado = await this.gs.editGroup(id, group);

    this.isEditing = false;
  }
}
