import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcontactComponent } from '../editcontact/editcontact.component';

const routes: Routes = [
  {
    path: '',
    component: EditcontactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofileRoutingModule {}
