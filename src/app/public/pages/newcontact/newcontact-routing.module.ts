import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcontactComponent } from './newcontact.component';

const routes: Routes = [
  {
    path:'',
    component: NewcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcontactRoutingModule { }
