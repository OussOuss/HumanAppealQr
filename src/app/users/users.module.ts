import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { usersComponent } from './users.component';
import { userListComponent } from './user-list/user-list.component';
import { userDetailComponent } from './user-detail/user-detail.component';
import { userItemComponent } from './user-list/user-item/user-item.component';
import { userStartComponent } from './user-start/user-start.component';
import { userEditComponent } from './user-edit/user-edit.component';
import { usersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    usersComponent,
    userListComponent,
    userDetailComponent,
    userItemComponent,
    userStartComponent,
    userEditComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    usersRoutingModule,
    SharedModule
  ]
})
export class usersModule {}
