import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardindexComponent } from './cardindex/cardindex.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { HomeComponent } from './home/home.component';
import { PrimariaComponent } from './primaria/primaria.component';
import { SecundariaComponent } from './secundaria/secundaria.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardindexComponent,
    QuienessomosComponent,
    HomeComponent,
    PrimariaComponent,
    SecundariaComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
