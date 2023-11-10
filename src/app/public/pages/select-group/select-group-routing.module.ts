import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectGroupComponent } from './select-group.component';

const routes: Routes = [
  {
    path:"",
    component:SelectGroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectGroupRoutingModule { }
