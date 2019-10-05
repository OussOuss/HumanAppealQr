import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { usersComponent } from './users.component';
import { AuthGuard } from '../auth/auth.guard';
import { userStartComponent } from './user-start/user-start.component';
import { userEditComponent } from './user-edit/user-edit.component';
import { userDetailComponent } from './user-detail/user-detail.component';
import { usersResolverService } from './users-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: usersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: userStartComponent },
      { path: 'new', component: userEditComponent },
      {
        path: ':id',
        component: userDetailComponent,
        resolve: [usersResolverService]
      },
      {
        path: ':id/edit',
        component: userEditComponent,
        resolve: [usersResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class usersRoutingModule {}
