import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactcardComponent } from '../../components/contactcard/contactcard.component';
import { FormsModule } from '@angular/forms';
import { EditcontactComponent } from '../../components/edit-contact/edit-contact.component';
// import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactsComponent, ContactcardComponent, EditcontactComponent],
  exports: [ContactcardComponent],
  imports: [CommonModule, ContactsRoutingModule, FormsModule],
})
export class ContactsModule {}

// , SharedModule
