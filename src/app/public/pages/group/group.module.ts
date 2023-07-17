import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { GroupCardComponent } from '../../components/group-card/group-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GroupComponent, GroupCardComponent],
  imports: [CommonModule, GroupRoutingModule, FormsModule],
})
export class GroupModule {}
