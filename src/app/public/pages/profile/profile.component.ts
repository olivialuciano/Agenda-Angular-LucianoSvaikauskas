import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: IUser = {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  isEditing = false;

  constructor(
    private router: Router,
    private us: UserService,
    private authService: AuthService
  ) {}

  // cuando arranca trae los datos del usuario logeado
  ngOnInit(): void {
    const loggedInUserId = this.authService.getUserId();
    if (loggedInUserId) {
      this.getUser(loggedInUserId);
    }
  }

  async getUser(id: number) {
    try {
      const usuarioo = await this.us.getUserDetails(id);
      console.log('usuario de id: ', id, 'usuario completito: ', usuarioo);
      this.user = usuarioo;
    } catch (error) {
      console.error('Error al traer el user:', error);
    }
  }

  showConfirmationDialog: boolean = false;

  confirmDelete() {
    console.log('Eliminar cuenta...');
    this.us.deleteUser(this.user.id!);
    this.router.navigate(['']);
    this.showConfirmationDialog = false;
  }

  cancelDelete() {
    console.log('Cancelar eliminación de cuenta...');
    this.showConfirmationDialog = false;
  }

  editUsuario(form: NgForm) {
    console.log('usuario editadoooo a ver si funca che');
    const usuarioeditado = this.us.editUser(this.user.id!, this.user);
    this.isEditing = false;
  }

  cerrarSesion() {
    this.authService.resetSession();
    this.router.navigate(['/login']);
  }
}
