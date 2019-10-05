import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { userService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class userEditComponent implements OnInit {
  id: number;
  editMode = false;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: userService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.userService.updateuser(this.id, this.userForm.value);
    } else {
      this.userService.adduser(this.userForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let userName = '';
    let userImagePath = '';
    let userDescription = '';

    if (this.editMode) {
      const user = this.userService.getuser(this.id);
      userName = user.name;
      userImagePath = user.imagePath;
      userDescription = user.description;
    }

    this.userForm = new FormGroup({
      name: new FormControl(userName, Validators.required),
      imagePath: new FormControl(userImagePath, Validators.required),
      description: new FormControl(userDescription, Validators.required)
    });
  }
}
