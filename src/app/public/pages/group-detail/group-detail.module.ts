import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupDetailRoutingModule } from './group-detail-routing.module';
import { GroupDetailComponent } from './group-detail.component';
import { ContactcardComponent } from '../../components/contactcard/contactcard.component';

@NgModule({
  declarations: [GroupDetailComponent],
  imports: [CommonModule, GroupDetailRoutingModule],
})
export class GroupDetailModule {}
