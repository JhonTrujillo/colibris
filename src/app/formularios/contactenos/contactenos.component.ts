import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

  // nombres = new FormControl("");
  // apellidos = new FormControl("");
  // cedula = new FormControl("");
  // Correo = new FormControl("");
  // usuario = new FormControl("");
  // observaciones = new FormControl("");

constructor(private fb: FormBuilder) { }
formContacto = this.fb.group({
nombres: ["", Validators.required]

})

}




