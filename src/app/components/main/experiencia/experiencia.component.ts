import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/experiencia';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Observable, Subscription } from 'rxjs';
import { QuestionService } from '../../forms/question.service';
import { QuestionBase } from '../../forms/question-base';
import { ProyQuestionService } from '../proyectos/proy-question.service';
import { DatosExperienciaService } from 'src/app/services/datos-experiencia.service';
import { Proyecto } from 'src/app/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { ExpQuestionService } from './expQuestion.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.less'],
  providers:[ExpQuestionService]
})
export class ExperienciaComponent implements OnInit {


exps: Experiencia[] = [];
proys: Proyecto[] = [];

questions$: Observable<QuestionBase<any>[]>;
  @Input() exp: Experiencia = this.exps[0];
  faXmark = faXmark;

  botonName:string = "Guardar Nueva Experiencia";
  botonNameEdit:string = "Editar Experiencia";

  showEditExp:boolean = false;
  showNewExp:boolean = false;
  
  authUser: boolean = false;

  subscription?: Subscription;
  subscriptionNew?: Subscription;
  proyService: any;

  constructor(private expService : DatosExperienciaService ,
    private uiService: UiServiceService,
    private service:ExpQuestionService,
    private auth:AuthService,
    ) {

    this.subscription = this.uiService.onToogleE()
    .subscribe(value => this.showEditExp = value);
    this.subscriptionNew = this.uiService.onToogleNE()
    .subscribe(value => this.showNewExp = value);

    this.questions$ = service.getQuestions();
   }

  ngOnInit(): void {
    this.expService.obtenerExp().subscribe((res)=>{
      this.exps = res
    })
    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
    } else {
      this.authUser = false;
    }


  }
  // Toogles de aparicion

  toogleEditExp(){
    this.uiService.toogleEditExp();
   }

   toogleNewExp(){
    this.uiService.toogleNewExp();
   }
// CRUD del Proyecto

borrarExp(exp:Experiencia){
  this.expService.borrarProy(exp)
  .subscribe(
    ()=> {
      this.exps = this.exps.filter((e) => e.id !== exp.id)
    }
  )
}
newExp(exp:Experiencia){
  exp.persona_id=6;
  this.expService.newExp(exp)
  .subscribe((exp: Experiencia) =>{
    this.exps.push(exp)
  })
}

  // DROP DRAG
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.exps, event.previousIndex, event.currentIndex);
  }
}
