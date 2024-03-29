import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { DataSharingService } from './shared/DataSharingService';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataSharingService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
