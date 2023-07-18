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
    //recibe los datos del grupo
    id: 0,
    name: '',
  };
  ngOnInit(): void {}

  groupForeditData: GroupJsonPlaceholder = {
    id: 0,
    name: '',
  };

  isEditing = false;

  eliminarGrupo(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del contacto de esa agenda)
    console.log('grupo id: ', id, ' eliminado');
    this.gs.deleteGroup(id);
    this.router.navigate(['/group']); //ejecuta el metodo deleteContacto() del contact component
  }

  // async editarGrupo(id: number, group: GroupJsonPlaceholder, form: NgForm) {

  //   this.gs.editGroup(id, group);
  // }
  async getGrupo(id: number) {
    //recibe el id de un contacto
    const grupo = this.gs.getGroupDetails(id); //trae un objeto contacto con todos sus datos
    return await grupo;
  }

  // async contactForEditData(id: number) {
  //   const contactForEdit = this.getGrupo(id); //ejecuta getContacto() con el id del contacto que va a ser editado

  //   this.contactForeditData.id = (await contactForEdit).id; //reemplaza todos los valores del contactForeditData con los del contacto buscado
  //   (this.contactForeditData.name = (await contactForEdit).name), //para que cuando se abra el form aparezcan todos los datos actuales del contacto
  //     (this.contactForeditData.celularNumber = (
  //       await contactForEdit
  //     ).celularNumber),
  //     (this.contactForeditData.telephoneNumber = (
  //       await contactForEdit
  //     ).telephoneNumber),
  //     (this.contactForeditData.description = (
  //       await contactForEdit
  //     ).description);
  // }

  async editgroup(id: number, groupForeditData: any, form: NgForm) {
    // toma  el id y los datos editados del contacto desde el form

    console.log(form.value);

    const grupoeditado = this.gs.editGroup(id, this.groupForeditData); //ejecuta el metodo editContact del contact service

    console.log(
      "el contacto '",
      (await grupoeditado).name,
      "' id:",
      (await grupoeditado).id,
      'fue editado correctamente'
    ); //hace un console.log con los valores devueltos
    this.isEditing = false;
  }
}

//hacer una funcion que al apretar el nombre del grupo, vaya a group detail de ESE grupo con un navigate [routerLink]="['/groupdetail1']"
