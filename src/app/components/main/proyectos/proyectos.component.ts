import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { finalize, Observable, Subscription } from 'rxjs';
import { QuestionService } from '../../forms/question.service';
import { QuestionBase } from '../../forms/question-base';
import { ProyQuestionService } from './proy-question.service';
import { Imagen } from 'src/app/img';
import { QuestionImgService } from '../../forms/questionImg.service';
import { FileI } from 'src/app/fileI';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HttpClient } from '@angular/common/http';
import { ProyServService } from './proy-serv.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.less'],
  providers:[ProyQuestionService]
})
export class ProyectosComponent implements OnInit {

  proys: Proyecto[] = [];
  public img: any;
  
  questions$: Observable<QuestionBase<any>[]>;
  questionsValues$:any = {
    id : 0,
    titulo : '',
    descrip_proj : '',
    img_proyecto : '',
    link_proj : '',
    habilidades : '',
    persona_id : 6,
  };

  botonName:string = "Guardar Nuevo Proyecto";
  botonNameEdit:string = "Editar Proyecto";
  fb:any;
  showEditProy:boolean = false;
  showNewProy:boolean = false;
  cDrag:boolean = false;
  
  subscription?: Subscription;
  subscriptionNew?: Subscription;
  subscriptionN?: Subscription;

  authUser: boolean = false;
  useSelect:boolean = false;

  public imagenRepo : any;

  constructor(private proyService :ProyServService ,
    private uiService: UiServiceService, 
    private service:ProyQuestionService,
    private auth:AuthService 
    ) {

    this.subscription = this.uiService.onToogle()
    .subscribe(value => this.showEditProy = value);
    this.subscriptionNew = this.uiService.onToogleNew()
    .subscribe(value => this.showNewProy = value);
    this.subscriptionNew = this.uiService.onToogleNew()
    .subscribe(value => this.showNewProy = value);
    this.questions$ = service.getQuestions();
    
   }




  ngOnInit(): void {
  
    this.proyService.obtenerProy().subscribe((res)=>{
      this.proys = res
    })

    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.cDrag = false;
      this.authUser = true;
    } else {
      this.cDrag = true;
      this.authUser = false;
    }
    
  }


  // Toogles de aparicion

  toogleEditProy(){
    this.uiService.toogleEditProy();
   }

   toogleNewProy(){
    this.uiService.toogleNewProy();
   }


// CRUD del Proyecto

  borrarProy(proy:Proyecto){
    this.proyService.borrarProy(proy)
    .subscribe(
      ()=> {
        this.proys = this.proys.filter((p) => p.id !== proy.id)
      }
    )
    setTimeout(()=>{     this.proyService.obtenerProy().subscribe((res)=>{
      this.proys = res
    }) },1000)

  }

  select(proy:Proyecto){
    this.questionsValues$ = proy
  
    this.useSelect = !this.useSelect
    setTimeout(()=> {
      this.useSelect=!this.useSelect
    },500)
    
  }

  editProy(proy:Proyecto){

    this.proyService.editarProy(proy)
    .subscribe((proy)=> this.proys.push(proy))
  
    setTimeout(()=>{     this.proyService.obtenerProy().subscribe((res)=>{
      this.proys = res
    }) },1000)
  
  }

  newProy(proy:Proyecto){
    proy.persona_id=6;
     this.proyService.newProy(proy)
     setTimeout(()=>{     this.proyService.obtenerProy().subscribe((res)=>{
      this.proys = res
    }) },1500)
  }

  // newImg(img:Imagen){
  //   this.imgS.uploadFile(img)
  //   .subscribe((res) =>{
  //     this.img.push(res)
  //   })
  // }

}
