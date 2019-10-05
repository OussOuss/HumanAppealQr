import { Component, OnInit, Input } from '@angular/core';

import { user } from '../../user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class userItemComponent implements OnInit {
  @Input() user: user;
  @Input() index: number;

  ngOnInit() {
  }
}
