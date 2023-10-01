import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { contactenosService } from 'src/app/servicios/contactenos.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})

 export class ContactenosComponent implements OnInit {

  formContacto = new FormGroup({
    nombres: new FormControl(""),
    apellidos: new FormControl(""),
    cedula: new FormControl(""),
    email: new FormControl(""),
    usuario: new FormControl(""),
    observaciones: new FormControl(""),
  });



constructor(private api: contactenosService) { }

  ngOnInit(): void {
  }
  onSubmit($e: any)
  {
    alert('Inicia envio');
    this.api.enviarDatos(this.formContacto.value).subscribe(responseOK => {
      console.log('Resultado de la operacion',responseOK);
      alert(responseOK.mensaje);

    },responseError => {

      console.log('Ocurrio un error',responseError.error);
      alert("error");
      alert(responseError.error.mensaje_error);
    })

  }
}

 
// export class ContactenosComponent {

//   // nombres = new FormControl("");
//   // apellidos = new FormControl("");
//   // cedula = new FormControl("");
//   // Correo = new FormControl("");
//   // usuario = new FormControl("");
//   // observaciones = new FormControl("");

//   constructor(private fb: FormBuilder) { }
//   formContacto = this.fb.group({
//   nombres: ["", [Validators.required, Validators.minLength(4)]],
//   apellidos: ["", Validators.required],
//   cedula: ["", Validators.required],
//   email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
//   usuario: ["", [Validators.required, Validators.pattern("^([a-zA-Z0-9_-]{0,25})$")]],
//   observaciones: ["", [Validators.required, Validators.maxLength(10)]]

//   }
// )
// ngOnInit(): void{
// }
// // enviarDatos():any {
// //  console.log("Me precionaste");
// //  console.log(this.formContacto.value);
// // }
// }
