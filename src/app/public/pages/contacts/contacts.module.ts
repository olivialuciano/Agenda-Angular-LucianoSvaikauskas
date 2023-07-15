import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactcardComponent } from '../../components/contactcard/contactcard.component';

@NgModule({
  declarations: [ContactsComponent, ContactcardComponent],
  exports: [ContactcardComponent],
  imports: [CommonModule, ContactsRoutingModule],
})
export class ContactsModule {}
