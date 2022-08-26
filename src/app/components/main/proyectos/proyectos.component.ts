import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Observable, Subscription } from 'rxjs';
import { QuestionService } from '../../forms/question.service';
import { QuestionBase } from '../../forms/question-base';
import { ProyQuestionService } from './proy-question.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.less'],
  providers:[ProyQuestionService]
})
export class ProyectosComponent implements OnInit {

  proys: Proyecto[] = [];
  
  questions$: Observable<QuestionBase<any>[]>;

  botonName:string = "Guardar Nuevo Proyecto";
  botonNameEdit:string = "Editar Proyecto";

  showEditProy:boolean = false;
  showNewProy:boolean = false;
  
  subscription?: Subscription;
  subscriptionNew?: Subscription;

  constructor(private proyService : ProyectosService ,
    private uiService: UiServiceService,
    service:ProyQuestionService
    ) {

    this.subscription = this.uiService.onToogle()
    .subscribe(value => this.showEditProy = value);
    this.subscriptionNew = this.uiService.onToogleNew()
    .subscribe(value => this.showNewProy = value);

    this.questions$ = service.getQuestions();
   }




  ngOnInit(): void {
  
    this.proyService.obtenerProy().subscribe((res)=>{
      this.proys = res
      console.log(this.proys)
    })
  }


  // Toogles de aparicion

  toogleEditProy(){
    this.uiService.toogleEditProy();
   }

   toogleNewProy(){
    this.uiService.toogleNewProy();
    console.log(this.showNewProy)
   }


// CRUD del Proyecto

  borrarProy(proy:Proyecto){
    this.proyService.borrarProy(proy)
    .subscribe(
      ()=> {
        this.proys = this.proys.filter((p) => p.id !== proy.id)
      }
    )
  }
  newProy(proy:Proyecto){
    proy.persona_id=6;
    this.proyService.newProy(proy)
    .subscribe((proy) =>{
      this.proys.push(proy)
    })
  }



  // DROP DRAG
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.proys, event.previousIndex, event.currentIndex);
  }

}
