import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditprofileComponent implements OnInit {
  // constructor(private us: UserService, private router: Router, private pc: ProfileComponent, ) { }

  // idUserForEdit: number = this.pc.idUserForEdit;
  // ngOnInit(): void {
  //   this.userForEditData(this.idUserForEdit);
  // }
  ngOnInit(): void {
    //   this.userForEditData(this.idUserForEdit);
  }

  // async getUser(id: number) {
  //   //recibe el id de un contacto
  //   const usuario = this.us.getUserDetails(id); //trae un objeto contacto con todos sus datos
  //   return await usuario;
  // }

  // async userForEditData(id: number) {
  //   const contactForEdit = this.getUsuario(id); //ejecuta getContacto() con el id del contacto que va a ser editado

  //   this.contactForeditData.id = (await contactForEdit).id; //reemplaza todos los valores del contactForeditData con los del contacto buscado
  //   (this.contactForeditData.Name = (await contactForEdit).Name), //para que cuando se abra el form aparezcan todos los datos actuales del contacto
  //     (this.contactForeditData.CelularNumber = (
  //       await contactForEdit
  //     ).CelularNumber),
  //     (this.contactForeditData.TelephoneNumber = (
  //       await contactForEdit
  //     ).TelephoneNumber),
  //     (this.contactForeditData.Description = (
  //       await contactForEdit
  //     ).Description);
  // }
}
