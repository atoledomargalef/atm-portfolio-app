import { Component, Input, OnInit } from '@angular/core';

import { ProyectosService } from 'src/app/services/proyectos.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Observable, Subscription } from 'rxjs';
import { QuestionService } from '../../forms/question.service';
import { QuestionBase } from '../../forms/question-base';
import { HabsQuestionService } from './habs-question.service';
import { DataHabsService } from 'src/app/services/data-habs.service';
import  Habilidades  from 'src/app/habilidades';
import { DataHabService } from 'src/app/services/data-hab.service';
import { AuthService } from 'src/app/services/auth.service';
import { HabilidadesLote } from '../../../habilidades.json'


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.less'],
  providers:[HabsQuestionService]
})
export class HabilidadesComponent implements OnInit {

  habs: Habilidades[] = [];

  
  

  
  questions$: Observable<QuestionBase<any>[]>;
  questionsValues$:any = {
    id: 0,
    habilidades: '',
    descripcion: '',
    porcentaje: 0,
  };
  questionsId$: number | undefined;

  botonName:string = "Guardar Nueva Habilidad";
  botonNameEdit:string = "Editar Habilidad";

  showEditHab:boolean = false;
  showNewHab:boolean = false;
  showNUHab:boolean = false;
  authUser: boolean = false;
  cDrag:boolean = false;
  useSelect:boolean = false;
  
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

    // this.habsService.obtenerHab().subscribe((res)=>{
    //   this.habs = res.sort(((a, b)=> { 
    //     return  b.porcentaje  - a.porcentaje 
    //    } ))
    // })

  this.habs = HabilidadesLote.sort((a,b)=> {
    return b.porcentaje - a.porcentaje
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
  this.habsService.obtenerHab().subscribe((res)=>{
      this.habs = res})
}
newHab(hab: Habilidades){
  this.habsService.newHab(hab)
  .subscribe((hab) =>{
    this.habs.push(hab)
  })
  setTimeout(()=> {this.habsService.obtenerHab().subscribe((res)=>{
    this.habs = res})},1000) 
}

select(hab:Habilidades){
  this.questionsValues$ = hab

  this.useSelect = !this.useSelect
  setTimeout(()=> {
    this.useSelect=!this.useSelect
  },500)
  
}

editHab(hab: Habilidades){

  this.habsService.editarHab(hab)
  .subscribe((hab)=> this.habs.push(hab))

  setTimeout(()=> {this.habsService.obtenerHab().subscribe((res)=>{
    this.habs = res})},1000) 

}

}





