import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.scss'],
})
export class ContactcardComponent implements OnInit {
  constructor(private cc: ContactsComponent, private router: Router) {}

  @Input() contact: ContactJsonPlaceholder = {
    //recibe los datos del contacto
    id: 0,
    nombre: '',
    telefono: '',
    celular: '',
    descripcion: '',
  };

  ngOnInit(): void {}
}
