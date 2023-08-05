import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { HomeComponent } from './home/home.component';
import { PrimariaComponent } from './primaria/primaria.component';
import { SecundariaComponent } from './secundaria/secundaria.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './formularios/login/login.component';
import { ContactenosComponent } from './formularios/contactenos/contactenos.component';
import { BuscadorComponent } from './buscador/buscador.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"quienessomos",component:QuienessomosComponent},
  {path:"primaria",component:PrimariaComponent},
  {path:"secundaria",component:SecundariaComponent},
  {path:"cursos",component:CursosComponent},
  {path:"contacto",component:ContactenosComponent},
  {path:"login",component:LoginComponent},
  {path:"buscador",component:BuscadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
