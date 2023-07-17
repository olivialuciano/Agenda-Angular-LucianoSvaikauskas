import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ContactsModule } from './public/pages/contacts/contacts.module';
import { Groupdetail1Module } from './public/pages/groupdetail1/groupdetail1.module';
import { ContactsComponent } from './public/pages/contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
