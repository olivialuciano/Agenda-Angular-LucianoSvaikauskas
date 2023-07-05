import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnasRoutingModule } from './alumnas-routing.module';
import { AlumnasComponent } from './alumnas.component';

@NgModule({
  declarations: [AlumnasComponent],
  imports: [CommonModule, AlumnasRoutingModule],
})
export class AlumnasModule {}
