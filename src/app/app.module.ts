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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/header/about/about.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PersonalInfoComponent } from './components/header/personal-info/personal-info.component';
import { ExperienciaComponent } from './components/main/experiencia/experiencia.component';
import { ExpEditComponent } from './components/main/experiencia/exp-edit/exp-edit.component';
import { ForEditComponent } from './components/main/formacion/for-edit/for-edit.component';
import { FormacionComponent } from './components/main/formacion/formacion.component';
import { ProEditComponent } from './components/main/proyectos/pro-edit/pro-edit.component';
import { ProyectosComponent } from './components/main/proyectos/proyectos.component';
import { HabEditComponent } from './components/main/habilidades/hab-edit/hab-edit.component';
import { HabilidadesComponent } from './components/main/habilidades/habilidades.component';
import { EditButtonComponent } from './components/main/edit-button/edit-button.component';
import { EditPerComponent } from './components/header/personal-info/edit-per/edit-per.component';
import { ProyItemComponent } from './components/main/proyectos/proy-item/proy-item.component';


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
    PersonalInfoComponent,
    ExperienciaComponent,
    ExpEditComponent,
    ForEditComponent,
    FormacionComponent,
    ProEditComponent,
    ProyectosComponent,
    HabEditComponent,
    HabilidadesComponent,
    EditButtonComponent,
    EditPerComponent,
    ProyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
