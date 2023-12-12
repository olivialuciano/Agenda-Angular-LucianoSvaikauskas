import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllGroup, iGroupandContact } from 'src/app/interfaces/group.interface';
import { ContactService } from 'src/app/services/contact.service.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent implements OnInit {

  constructor(private gs:GroupService,private cs:ContactService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
    this.route.params.subscribe(params => {
      console.log(params)
      this.union.contactId = parseInt(params['id']);
    })
  }

  grupos: AllGroup[] = [];

  async getData() {
    this.grupos = await this.gs.getGroup();
 }

  union: iGroupandContact = {
    groupId: 0,
    contactId: 0
  }

  id: number | undefined

  async addToGroup(form:NgForm){
    console.log(form.value) 
    console.log(this.union);
    const contactoAsignado = await this.gs.AssignContact(this.union);
    if (contactoAsignado) this.router.navigate(['/contacts']);
    }
  }


