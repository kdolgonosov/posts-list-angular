import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SingUpPageComponent implements OnInit {
  signedUpUsersData: IUser[] = [];
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  get email() {
    return this.form.controls.email as FormControl;
  }
  get password() {
    return this.form.controls.password as FormControl;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const users = localStorage.getItem('users');
    if (users) {
      this.signedUpUsersData = JSON.parse(users);
    }
  }
  signUp() {
    this.signedUpUsersData.push({
      email: this.form.value.email!,
      password: this.form.value.password!,
    });
    localStorage.setItem('users', JSON.stringify(this.signedUpUsersData));
    this.router.navigate(['/login']);
  }
}
