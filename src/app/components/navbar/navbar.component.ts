import {TokenService} from 'src/app/services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.authService.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    this.tokenService.remove();
  }

}
