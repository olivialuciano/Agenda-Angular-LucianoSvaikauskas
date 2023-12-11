import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/interfaces/contact.interface';
import { GroupJsonPlaceholder } from 'src/app/interfaces/group.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss'],
})
export class NewcontactComponent implements OnInit {
  contactData: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    telephoneNumber: 0,
    celularNumber: 0,
    description: '',
  };

  constructor(
    private cs: ContactService,
    private gs: GroupService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.ar.params.subscribe((params) => {
    //   const sub: any = params['id'] || null;
    // });
  }

  async newcontact(form: NgForm) {
    console.log(form.value);
    const contactocreado = this.cs.addContact(this.contactData);
    console.log(
      'el contacto ',
      (await contactocreado).name,
      ' fue creado con el id: ',
      (await contactocreado).id,
      'con celu',
      (await contactocreado).telephoneNumber,
      ' con descripción: ',
      (await contactocreado).celularNumber,
      ' con descripción: ',
      (await contactocreado).description
    );
    this.router.navigate(['/contacts']);
  }
}
