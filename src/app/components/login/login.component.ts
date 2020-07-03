import { Component, OnInit } from '@angular/core';
import {JwtService} from "../../services/login-with-jwt.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email= 'email';
password= 'passwrod';
  constructor(private JWTService: JwtService) { }

  ngOnInit(): void {
  }
login(){
    this.JWTService.login(this.email,this.password).subscribe(result=>{
      console.log('login success');
    },error => {console.log(error)})
}
}
