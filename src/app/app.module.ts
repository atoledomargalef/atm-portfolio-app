import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { EditPerComponent } from './components/header/personal-info/edit-per/edit-per.component';
import { ProyItemComponent } from './components/main/proyectos/proy-item/proy-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CloseButtonComponent } from './components/buttons/close-button/close-button.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProNewComponent } from './components/main/proyectos/pro-new/pro-new.component';
import { ForNewComponent } from './components/main/formacion/for-new/for-new.component';
import { ForItemComponent } from './components/main/formacion/for-item/for-item.component';
import { ExpNewComponent } from './components/main/experiencia/exp-new/exp-new.component';
import { ExpItemComponent } from './components/main/experiencia/exp-item/exp-item.component';
import { CloseButtonBComponent } from './components/buttons/close-button-b/close-button-b.component';
import { DinamicFormComponent } from './components/forms/dinamic-form/dinamic-form.component';
import { DFormComponent } from './components/forms/d-form/d-form.component';
import { QuestionService } from './components/forms/question.service';
import { QuestionControlService } from './components/forms/question-control.service';
import { ProyQuestionService } from './components/main/proyectos/proy-question.service';
import { DatosExperienciaService } from './services/datos-experiencia.service';
import { HabItemComponent } from './components/main/habilidades/hab-item/hab-item.component';
import { NewHabUniComponent } from './components/main/habilidades/new-hab-uni/new-hab-uni.component';
import { QuestionImgService } from './components/forms/questionImg.service';
import { Imagen } from './img';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { InterceptorService } from './services/interceptor.service';



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
    EditPerComponent,
    ProyItemComponent,
    CloseButtonComponent,
    AddButtonComponent,
    EditButtonComponent,
    ProNewComponent,
    ForNewComponent,
    ForItemComponent,
    ExpNewComponent,
    ExpItemComponent,
    CloseButtonBComponent,
    DinamicFormComponent,
    DFormComponent,
    HabItemComponent,
    NewHabUniComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false}),
 
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [QuestionControlService,
     ScreenTrackingService,
     UserTrackingService, 
     AngularFirestore,  
     AngularFireAuth,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }



