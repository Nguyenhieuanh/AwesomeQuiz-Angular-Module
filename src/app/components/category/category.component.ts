import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {JarwisService} from "../../services/jarwis.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jarwisService: JarwisService,
    private tokenService: TokenService,
    private router: Router,) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
