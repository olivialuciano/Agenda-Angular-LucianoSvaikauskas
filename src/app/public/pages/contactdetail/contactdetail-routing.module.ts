import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactdetailComponent } from './contactdetail.component';

const routes: Routes = [
  {
    path:'',
    component: ContactdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactdetailRoutingModule { }
