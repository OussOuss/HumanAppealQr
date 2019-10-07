import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { user } from './user.model';

@Injectable()
export class userService {
  usersChanged = new Subject<user[]>();

  private users: user[] = [];

  constructor() {}

  setusers(users: user[]) {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  getusers() {
    return this.users.slice();
  }

  getuser(index: number) {
    return this.users[index];
  }

  adduser(user: user) {
    if(user.checked){
      user.lastDateChecked = new Date().getTime().toString();
    }
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  updateuser(index: number, newuser: user) {
    if(newuser.checked){
      newuser.lastDateChecked = new Date().getTime().toString();
    }
    this.users[index] = newuser;
    this.usersChanged.next(this.users.slice());
  }

  deleteuser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }
}
