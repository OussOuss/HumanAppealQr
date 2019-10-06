import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { userService } from '../user.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class userEditComponent implements OnInit {
  id: number;
  editMode = false;
  userForm: FormGroup;
  genders = ['Mr', 'Mme'];
  constructor(
    private route: ActivatedRoute,
    private userService: userService,
    private router: Router, private dataStorageService: DataStorageService
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
      this.dataStorageService.storeusers();
    } else {
      this.userService.adduser(this.userForm.value);
      this.dataStorageService.storeusers();
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let firstName = '';
    let lastName = '';
    let adresse= '';
    let dateNaissance= '';
    let lieuNaissance= '';
    let genders = 'Mr';
    let typeIdentifiant= 'p';
    let identifiant= '';
    let telephone= '';
    let email= '';

    if (this.editMode) {
      const user = this.userService.getuser(this.id);
      firstName = user.firstName;
      lastName = user.lastName;
      adresse = user.adresse;
      dateNaissance = user.dateNaissance;
      lieuNaissance = user.lieuNaissance;
      genders = user.typeIdentifiant;
      typeIdentifiant = user.typeIdentifiant;
      identifiant = user.identifiant;
      telephone = user.telephone;
      email = user.email;
    }

    this.userForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      adresse: new FormControl(adresse),
      dateNaissance: new FormControl(dateNaissance, Validators.required),
      lieuNaissance: new FormControl(lieuNaissance, Validators.required),
      genders: new FormControl(genders, Validators.required),
      typeIdentifiant: new FormControl(typeIdentifiant, Validators.required),
      identifiant: new FormControl(identifiant, Validators.required),
      telephone: new FormControl(telephone),
      email: new FormControl(email, Validators.email)
    });
  }
}
