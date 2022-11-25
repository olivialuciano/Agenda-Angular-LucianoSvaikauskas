import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcontactRoutingModule } from './editcontact-routing.module';
import { EditcontactComponent } from './editcontact.component';


@NgModule({
  declarations: [
    EditcontactComponent
  ],
  imports: [
    CommonModule,
    EditcontactRoutingModule
  ]
})
export class EditcontactModule { }
