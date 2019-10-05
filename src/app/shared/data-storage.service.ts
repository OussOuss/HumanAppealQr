import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { user } from '../users/user.model';
import { userService } from '../users/user.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private userService: userService,
    private authService: AuthService
  ) {}

  storeusers() {
    const users = this.userService.getusers();
    this.http
      .put(
        'https://human-appeal-qr.firebaseio.com/users.json',
        users
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchusers() {
    return this.http
      .get<user[]>(
        'https://human-appeal-qr.firebaseio.com/users.json'
      )
      .pipe(
        map(users => {
          return users.map(user => {
            return {
              ...user
            };
          });
        }),
        tap(users => {
          this.userService.setusers(users);
        })
      );
  }
}
