import { TestBed } from '@angular/core/testing';

import { LoginWithJWTService } from './login-with-jwt.service';

describe('LoginWithJWTService', () => {
  let service: LoginWithJWTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginWithJWTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
