import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactenosComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ContactenosComponent,
    
  ]
})
export class FormulariosModule { }
