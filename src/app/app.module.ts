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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MainComponent,
    BotonAComponent,
    ProfileComponent,
    BotonSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
