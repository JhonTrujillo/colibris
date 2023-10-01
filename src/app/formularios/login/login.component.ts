import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

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
  ngOnInit(): void{
   }
   enviarDatos():any {
    console.log("Me precionaste");
    console.log(this.formLogin.value);
   }
   
  }
 
