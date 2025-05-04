import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;
  roles = [
    {
      name: 'Administrador',
      value: 1,
    },
    {
      name: 'Usuario',
      value: 2,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: [2, [Validators.required]],
    });

    this.loginForm.get('user')?.valueChanges.subscribe((value) => {
      if (value === 1) {
        this.loginForm.addControl(
          'password',
          new FormControl(null, [Validators.required]),
        );
        this.showPassword = true;
      } else {
        this.loginForm.removeControl('password');
        this.showPassword = false;
      }
    });
  }

  doLogin() {
    if (this.loginForm.value.user === 2) {
      this.router.navigateByUrl('/supermarket');
    } else {
      this.router.navigateByUrl('/results');
    }
  }
}
