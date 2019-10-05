import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { user } from './user.model';
import { DataStorageService } from '../shared/data-storage.service';
import { userService } from './user.service';

@Injectable({ providedIn: 'root' })
export class usersResolverService implements Resolve<user[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private usersService: userService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const users = this.usersService.getusers();

    if (users.length === 0) {
      return this.dataStorageService.fetchusers();
    } else {
      return users;
    }
  }
}
