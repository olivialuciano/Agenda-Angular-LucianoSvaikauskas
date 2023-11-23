import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./public/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./public/pages/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./public/pages/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'groupdetail/:id',
    loadChildren: () =>
      import('./public/pages/group-detail/group-detail.module').then(
        (m) => m.GroupDetailModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'selectgroup/:id',
    loadChildren: () =>
      import('./public/pages/select-group/select-group.module').then(
        (m) => m.SelectGroupModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'newcontact',
    loadChildren: () =>
      import('./public/pages/newcontact/newcontact.module').then(
        (m) => m.NewcontactModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'alumnas',
    loadChildren: () =>
      import('./public/pages/alumnas/alumnas.module').then(
        (m) => m.AlumnasModule
      ),
  },
  {
    path: 'group',
    loadChildren: () =>
      import('./public/pages/group/group.module').then((m) => m.GroupModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'newgroup',
    loadChildren: () =>
      import('./public/pages/newgroup/newgroup.module').then(
        (m) => m.NewgroupModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./public/pages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: '**',
    loadChildren: () =>
      import('./public/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
