import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Groupdetail1RoutingModule } from './groupdetail1-routing.module';
import { Groupdetail1Component } from './groupdetail1.component';
import { ContactcardComponent } from '../../components/contactcard/contactcard.component';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [Groupdetail1Component],
  exports: [],
  imports: [CommonModule, Groupdetail1RoutingModule],
})
export class Groupdetail1Module {}

// , SharedModule
