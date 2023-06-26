import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiperfilRoutingModule } from './miperfil-routing.module';
import { MiperfilComponent } from './miperfil.component';


@NgModule({
  declarations: [
    MiperfilComponent
  ],
  imports: [
    CommonModule,
    MiperfilRoutingModule
  ]
})
export class MiperfilModule { }
