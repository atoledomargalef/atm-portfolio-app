import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Observable, Subscription } from 'rxjs';
import { QuestionService } from '../../forms/question.service';
import { QuestionBase } from '../../forms/question-base';
import { HabsQuestionService } from './habs-question.service';
import { DataHabsService } from 'src/app/services/data-habs.service';
import { Habilidades } from 'src/app/habilidades';
import { Hab } from 'src/app/hab';
import { DataHabService } from 'src/app/services/data-hab.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.less'],
  providers:[HabsQuestionService]
})
export class HabilidadesComponent implements OnInit {

  habs: Habilidades[] = [];
  
  habUni: Hab[] = [];

  questions$: Observable<QuestionBase<any>[]>;

  botonName:string = "Guardar Nueva Habilidad";
  botonNameEdit:string = "Editar Habilidad";

  showEditHab:boolean = false;
  showNewHab:boolean = false;
  showNUHab:boolean = false;
  authUser: boolean = false;
  cDrag:boolean = false;
  
  subscription?: Subscription;
  subscriptionNew?: Subscription;
  subscriptionU?: Subscription;

  constructor(private habsService : DataHabsService , private auth : AuthService,
    private uiService: UiServiceService, private service:HabsQuestionService) { 

      this.subscription = this.uiService.onToogleH()
      .subscribe(value => this.showEditHab = value);
      this.subscriptionNew = this.uiService.onToogleNH()
      .subscribe(value => this.showNewHab = value);
      this.subscriptionU = this.uiService.onToogleUH()
      .subscribe(value => this.showNUHab = value);

      this.questions$ = service.getQuestions();
    
   }

  ngOnInit(): void {

    this.habsService.obtenerHab().subscribe((res)=>{
      this.habs = res
      console.log(this.habs)
    })

    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
      this.cDrag = false;
    } else {
      this.cDrag = true;
      this.authUser = false;
    }
  }


 // Toogles de aparicion

 toogleEditHabs(){
  this.uiService.toogleEditHabs();
 }

 toogleNewHabs(){
  this.uiService.toogleNewHabs();
 }
 toogleNUHabs(){
  this.uiService.toogleNUHabs();
 }

// CRUD del Proyecto

borrarHab( hab : Habilidades ){
  this.habsService.borrarHab(hab)
  .subscribe(
    ()=> {
      this.habs = this.habs.filter((p) => p.id !== hab.id)
    }
  )
}
newHab(hab: Habilidades){
  console.log(hab)
  this.habsService.newHab(hab)
  .subscribe((hab) =>{
    this.habs.push(hab)
  })
}


// DROP DRAG
drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.habs, event.previousIndex, event.currentIndex);
}

}





