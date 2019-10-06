import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { user } from '../user.model';
import { userService } from '../user.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class userDetailComponent implements OnInit {
  user: user;
  id: number;

  constructor(private userService: userService,
              private route: ActivatedRoute,
              private router: Router, private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.user = this.userService.getuser(this.id);
        }
      );
  }

  onEdituser() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteuser() {
    this.userService.deleteuser(this.id);
    this.dataStorageService.storeusers();
    this.router.navigate(['/users']);
  }

}
