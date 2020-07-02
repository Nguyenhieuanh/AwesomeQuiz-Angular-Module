import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl: 'http://awesomequiz.com/api';

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
