import { Component, Input, OnInit } from '@angular/core';
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
  };

  ngOnInit(): void {
    // this.getUsuario(this.user.id)
  }

  userData: any = {
    name: 'Victoria',
    lastName: 'Svaikauskas',
    email: 'vicky@gmail.com',
  };
  isEditing = false;
  deleteUsuario(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' eliminado');
    this.us.deleteUser(id);
    this.router.navigate(['']);
  }

  // getUsuario(id: number){
  //   this.us.getUserDetails(id);
  // }

  editUsuario(id: number, user: IUser) {
    //metodo llamado desde el boton edit del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' edit');
    this.us.editUser(id, user);
  }
}
