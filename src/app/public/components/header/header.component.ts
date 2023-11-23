import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  navigateToContacts() {
    if (this.authService.isLoggedIn()) {
      // El usuario está autenticado, permite la navegación
      // Puedes agregar más lógica aquí si es necesario
      this.router.navigate(['/contacts']);
    } else {
      // El usuario no está autenticado, puedes redirigirlo a la página de inicio de sesión o mostrar un mensaje
      console.log('Usuario no autenticado. Redirigiendo a la página de inicio de sesión.');
    }
  }

}
