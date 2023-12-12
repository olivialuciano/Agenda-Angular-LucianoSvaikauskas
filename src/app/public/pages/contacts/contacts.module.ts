import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactcardComponent } from '../../components/contactcard/contactcard.component';
import { FormsModule } from '@angular/forms';
import { EditContactComponent } from '../../components/edit-contact/edit-contact.component';
import { AuthGuard } from 'src/app/services/auth.guard';

@NgModule({
  declarations: [ContactsComponent, ContactcardComponent, EditContactComponent],
  exports: [ContactcardComponent],
  imports: [CommonModule, ContactsRoutingModule, FormsModule],
})
export class ContactsModule {}
