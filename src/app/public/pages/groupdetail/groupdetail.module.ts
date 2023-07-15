import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupdetailRoutingModule } from './groupdetail-routing.module';
import { GroupdetailComponent } from './groupdetail.component';
import { ContactcardComponent } from '../../components/contactcard/contactcard.component';
import { GroupCardComponent } from '../../components/group-card/group-card.component';
import { GroupRoutingModule } from '../group/group-routing.module';

@NgModule({
  declarations: [GroupdetailComponent],
  imports: [CommonModule, GroupRoutingModule],
})
export class GroupdetailModule {}

//, ContactcardComponent
