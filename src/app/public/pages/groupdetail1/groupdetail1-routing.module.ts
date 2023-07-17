import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Groupdetail1Component } from './groupdetail1.component';

const routes: Routes = [
  {
    path: '',
    component: Groupdetail1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Groupdetail1RoutingModule {}
