import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      pwdConfirm: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'pwdConfirm')
    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
