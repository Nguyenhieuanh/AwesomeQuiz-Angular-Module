import { JarwisService } from './../../services/jarwis.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public error = null;
  constructor(private formBuilder: FormBuilder,
              private jarwisService: JarwisService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.jarwisService.login(this.loginForm.value).subscribe(
      res => console.log(res),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.tokenService.handle(data.access_token);
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
