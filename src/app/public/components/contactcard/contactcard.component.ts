import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { ContactService } from 'src/app/services/contact.service.service';
@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.scss'],
})
export class ContactcardComponent implements OnInit {
  constructor(private router: Router, private cs: ContactService) {}

  @Output() onButtonEditClick = new EventEmitter<number>();

  @Input() contact: ContactJsonPlaceholder = {
    //recibe los datos del contacto
    id: 0,
    name: '',
    celularNumber: 0,
    telephoneNumber: 0,
    description: '',
  };
  ngOnInit(): void {}

  deleteContacto(id: number) {
    //metodo llamado desde el boton borrar del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' eliminado');
    this.cs.deleteContact(id); //ejecuta el metodo deleteContacto() del contact component
  }

  editContacto(id: number) {
    //metodo llamado desde el boton edit del html(recibe el id del contacto de esa agenda)
    console.log('contacto id: ', id, ' edit');
    this.cs.editContact(id, this.contact);
    this.onButtonEditClick.next(id);
  }
}
