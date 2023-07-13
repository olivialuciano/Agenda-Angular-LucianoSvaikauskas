import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupdetailRoutingModule } from './groupdetail-routing.module';
import { GroupdetailComponent } from './groupdetail.component';


@NgModule({
  declarations: [
    GroupdetailComponent
  ],
  imports: [
    CommonModule,
    GroupdetailRoutingModule
  ]
})
export class GroupdetailModule { }
