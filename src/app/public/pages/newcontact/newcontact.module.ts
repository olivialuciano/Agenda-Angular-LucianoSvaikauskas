import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcontactRoutingModule } from './newcontact-routing.module';
import { NewcontactComponent } from './newcontact.component';


@NgModule({
  declarations: [
    NewcontactComponent
  ],
  imports: [
    CommonModule,
    NewcontactRoutingModule
  ]
})
export class NewcontactModule { }
