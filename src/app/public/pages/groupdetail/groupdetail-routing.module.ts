import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupdetailComponent } from './groupdetail.component';

const routes: Routes = [
  {
    path:'',
    component: GroupdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupdetailRoutingModule {}
