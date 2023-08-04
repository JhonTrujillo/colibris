import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // usuario = new FormControl("");
  // password = new FormControl("");

  constructor(private fb: FormBuilder) { }
  formLogin = this.fb.group({
    usuario: ["", [Validators.required, Validators.pattern("^([a-zA-Z0-9_-]{0,25})$")]],
    password: ["", Validators.required],

  })
}
