import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistLlamadasComponent } from './hist-llamadas.component';

const routes: Routes = [
  {
    path: '',
    component: HistLlamadasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistLlamadasRoutingModule {}
