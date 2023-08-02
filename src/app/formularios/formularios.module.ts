import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ContactenosComponent,
    LoginComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ContactenosComponent,
        
  ]
})
export class FormulariosModule { }
