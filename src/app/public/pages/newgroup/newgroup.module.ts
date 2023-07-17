import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewgroupRoutingModule } from './newgroup-routing.module';
import { FormsModule } from '@angular/forms';
import { NewgroupComponent } from './newgroup.component';

@NgModule({
  declarations: [NewgroupComponent],
  imports: [CommonModule, NewgroupRoutingModule, FormsModule],
})
export class NewgroupModule {}
