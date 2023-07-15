import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcontactRoutingModule } from './newcontact-routing.module';
import { NewcontactComponent } from './newcontact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewcontactComponent],
  imports: [CommonModule, NewcontactRoutingModule, FormsModule],
})
export class NewcontactModule {}
