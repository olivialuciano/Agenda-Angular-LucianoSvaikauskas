import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnasComponent } from './alumnas.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnasRoutingModule {}
