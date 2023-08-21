import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginError: Boolean = false;
  users: IUser[] = [];
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
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
      this.users = JSON.parse(users);
    }
  }
  login() {
    const isUserExist = this.users.find(
      (i) =>
        i.email === this.form.value.email &&
        i.password === this.form.value.password
    );
    if (isUserExist != undefined) {
      localStorage.setItem('token', Math.random().toString());
      this.router.navigate(['/posts']);
    } else {
      this.loginError = true;
    }
  }
}
