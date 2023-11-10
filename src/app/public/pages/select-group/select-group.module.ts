import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectGroupRoutingModule } from './select-group-routing.module';
import { SelectGroupComponent } from './select-group.component';
import { FormsModule } from '@angular/forms';
import { GroupSelectComponent } from '../../components/group-select/group-select.component';


@NgModule({
  declarations: [
    SelectGroupComponent,
    GroupSelectComponent
  ],
  exports:[
    SelectGroupComponent,
  ],
  imports: [
    CommonModule,
    SelectGroupRoutingModule,
    FormsModule
  ]
})
export class SelectGroupModule { }
