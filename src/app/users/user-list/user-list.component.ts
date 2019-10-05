import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { user } from '../user.model';
import { userService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class userListComponent implements OnInit, OnDestroy {
  users: user[];
  subscription: Subscription;

  constructor(private userService: userService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.userService.usersChanged
      .subscribe(
        (users: user[]) => {
          this.users = users;
        }
      );
    this.users = this.userService.getusers();
  }

  onNewuser() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
