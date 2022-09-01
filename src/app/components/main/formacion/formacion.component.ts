import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Formacion } from 'src/app/formacion';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Observable, Subscription } from 'rxjs';
import { QuestionBase } from '../../forms/question-base';
import { ProyQuestionService } from '../proyectos/proy-question.service';
import { DatosFormacionService } from 'src/app/services/datos-formacion.service';
import { AuthService } from 'src/app/services/auth.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { FormQuestionService } from './formQuestion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less'],
  providers:[FormQuestionService]
})
export class FormacionComponent implements OnInit {
  forms: Formacion[] = [];

  @Input() form: Formacion = this.forms[0];
questions$: Observable<QuestionBase<any>[]>;

  botonName:string = "Guardar Nueva Formación";
  botonNameEdit:string = "Editar Proyecto";

  showEditProy:boolean = false;
  showNewProy:boolean = false;
  
  authUser: boolean = false;
  cDrag:boolean = false;
  
  subscription?: Subscription;
  subscriptionNew?: Subscription;

  


faXmark = faXmark;

  constructor(
    private service:FormQuestionService,
    private auth:AuthService,
    
    private dFor : DatosFormacionService,
    private uiService: UiServiceService,


  ) { 
    this.dFor.obtenerFor().subscribe((res)=>{
      this.forms = res
      console.log(this.forms)
    })
    this.subscriptionNew = this.uiService.onToogleNF()
    .subscribe(value => this.showEditProy = value);
    
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
      this.cDrag = false;
    } else {
      this.cDrag = true;
      this.authUser = false;
    }
  }

  toogleNewForma(){
    this.uiService.toogleNewForma();
  }
  toogleEditForma(){
    console.log("toogleEditForma()")
  }


  borrarForm(form:Formacion){
    this.dFor.borrarForm(form)
    .subscribe(
      ()=> {
        this.forms = this.forms.filter((f) => f.id !== form.id)
      }
    )
  }

   // DROP DRAG
   drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.forms, event.previousIndex, event.currentIndex);
  }

  newForm(form:Formacion){
    form.persona_id=6;
  
     this.dFor.newForma(form);

  }

}

//  No olvidar agregar esto
// (formOutput)="newProy($event)"