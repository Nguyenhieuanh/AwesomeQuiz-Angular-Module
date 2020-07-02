import { TokenService } from 'src/app/services/token.service';
import { JarwisService } from './../../services/jarwis.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../../_helpers/must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  public error = [];

  constructor(
    private formBuilder: FormBuilder,
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'password_confirmation')
    });
  }

  onSubmit() {
    this.jarwisService.register(this.registerForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.tokenService.handle(data.access_token);
    // this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
