import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl = 'http://awesomequiz.test/api';

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  register(data) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
  category(data) {
    return this.http.post(`${this.baseUrl}/category`,data);
  }
}
