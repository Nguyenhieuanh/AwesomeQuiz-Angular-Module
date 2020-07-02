import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authStatus.subscribe(value => this.loggedIn = value);
  }

}
