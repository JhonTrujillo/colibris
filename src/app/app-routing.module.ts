import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { HomeComponent } from './home/home.component';
import { PrimariaComponent } from './primaria/primaria.component';
import { SecundariaComponent } from './secundaria/secundaria.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"quienessomos",component:QuienessomosComponent},
  {path:"primaria",component:PrimariaComponent},
  {path: "secundaria",component:SecundariaComponent},
  {path:"cursos",component:CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
