import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'contacts',
    loadChildren: () =>
      import('./public/pages/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  // {
  //   path: 'contactdetail',
  //   loadChildren: () =>
  //     import('./public/pages/contactdetail/contactdetail.module').then(
  //       (m) => m.ContactdetailModule
  //     ),
  // },
  // {
  //   path: 'editcontact',
  //   loadChildren: () =>
  //     import('./public/pages/editcontact/editcontact.module').then(
  //       (m) => m.EditcontactModule
  //     ),
  // },

  {
    path: 'signin',
    loadChildren: () =>
      import('./public/pages/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'newcontact',
    loadChildren: () =>
      import('./public/pages/newcontact/newcontact.module').then(
        (m) => m.NewcontactModule
      ),
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
  },
  {
    path: 'groupdetail',
    loadChildren: () =>
      import('./public/pages/groupdetail/groupdetail.module').then(
        (m) => m.GroupdetailModule
      ),
  },
  {
    path: 'newgroup',
    loadChildren: () =>
      import('./public/pages/newgroup/newgroup.module').then(
        (m) => m.NewgroupModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./public/pages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'editprofile',
    loadChildren: () =>
      import('./public/pages/editprofile/editprofile.module').then(
        (m) => m.EditprofileModule
      ),
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
