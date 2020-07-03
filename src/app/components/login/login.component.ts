import {AuthService} from './../../services/auth.service';
import {Router} from '@angular/router';
import {JarwisService} from './../../services/jarwis.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public error = null;

  constructor(
    private formBuilder: FormBuilder,
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.jarwisService.login(this.loginForm.value).subscribe(
      res => this.handleResponse(res),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.tokenService.handle(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
