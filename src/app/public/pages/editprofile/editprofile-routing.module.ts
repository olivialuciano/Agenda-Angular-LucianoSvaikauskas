import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile.component';

const routes: Routes = [
  {
    path: '',
    component: EditprofileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofileRoutingModule {}
