import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private us: UserService) {}

   @Input() user: IUser = {
    //recibe los datos del user
    id: 0,
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  id: number | undefined;

  ngOnInit(): void {}

  async getUser(id: number) {
    //recibe el id de un contacto
    const usuarioo = this.us.getUserDetails(id);
    console.log("usuario de id: ", id , usuarioo) //trae un objeto contacto con todos sus datos
    return await usuarioo;
  }

  userForEditData: any = {
    name: '',
    lastName: '',
    email: '',
  };
  isEditing = false;

  deleteUsuario(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' veremos si se elimina el maldito');
    this.us.deleteUser(id);
    this.router.navigate(['']);
  }

  editUsuario(id: number, user: IUser, form: NgForm) {
    //metodo llamado desde el boton edit del html(recibe el id del contacto de esa agenda)
    const usuarioeditado = this.us.editUser(id, this.user);
  }
}
