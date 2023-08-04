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
  nombres: ["", [Validators.required, Validators.minLength(4)]],
  apellidos: ["", Validators.required],
  cedula: ["", Validators.required],
  email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  usuario: ["", [Validators.required, Validators.pattern("^([a-zA-Z0-9_-]{0,25})$")]],
  observaciones: ["", [Validators.required, Validators.maxLength(10)]]

  }
)}




