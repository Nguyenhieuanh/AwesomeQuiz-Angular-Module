import {TokenService} from 'src/app/services/token.service';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.tokenService.loggedIn());
  authStatus = this.loggedIn.asObservable();

  constructor(private tokenService: TokenService) {
  }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
}
