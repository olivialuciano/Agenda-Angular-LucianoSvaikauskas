import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistLlamadasRoutingModule } from './hist-llamadas-routing.module';
import { HistLlamadasComponent } from './hist-llamadas.component';

@NgModule({
  declarations: [HistLlamadasComponent],
  imports: [CommonModule, HistLlamadasRoutingModule],
})
export class HistLlamadasModule {}
