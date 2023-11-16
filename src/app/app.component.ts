import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Agenda-Angular-LucianoSvaikauskas';
  constructor(private router: Router, private authService: AuthService) {}

  estaLogeado() {
    if (!this.authService.isLoggedIn) {
      return false;
    }
    return true;
  }
}
