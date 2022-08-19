import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BotonAComponent } from './components/buttons/boton-a/boton-a.component';
import { ProfileComponent } from './components/header/profile/profile.component';
import { BotonSesionComponent } from './components/buttons/boton-sesion/boton-sesion.component';
import { LoginComponent } from './components/menu/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/header/about/about.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PersonalInfoComponent } from './components/header/personal-info/personal-info.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MainComponent,
    BotonAComponent,
    ProfileComponent,
    BotonSesionComponent,
    LoginComponent,
    PortfolioComponent,
    AboutComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
