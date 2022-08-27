import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Formacion } from 'src/app/formacion';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Observable, Subscription } from 'rxjs';
import { QuestionBase } from '../../forms/question-base';
import { ProyQuestionService } from '../proyectos/proy-question.service';
import { DatosFormacionService } from 'src/app/services/datos-formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less'],
  providers:[ProyQuestionService]
})
export class FormacionComponent implements OnInit {
  forms: Formacion[] = [];

  @Input() form: Formacion = this.forms[0];
questions$: Observable<QuestionBase<any>[]>;

  botonName:string = "Guardar Nuevo Proyecto";
  botonNameEdit:string = "Editar Proyecto";

  showEditProy:boolean = false;
  showNewProy:boolean = false;
  
  subscription?: Subscription;
  subscriptionNew?: Subscription;

  


faXmark = faXmark;

  constructor(
    private service:ProyQuestionService,
    
    private dFor : DatosFormacionService,


  ) { 



    this.dFor.obtenerFor().subscribe((res)=>{
      this.forms = res
      console.log(this.forms)
    })
    
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

  toogleNewForma(){
    console.log("toogleNewForma()")
  }
  toogleEditForma(){
    console.log("toogleEditForma()")
  }


   // DROP DRAG
   drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.forms, event.previousIndex, event.currentIndex);
  }


}

//  No olvidar agregar esto
// (formOutput)="newProy($event)"