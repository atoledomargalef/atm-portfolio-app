import { Component, Input, OnInit } from '@angular/core';
import { faTemperatureHigh, faXmark } from '@fortawesome/free-solid-svg-icons';
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
questionsValues$: any = {
  id : 0,
  titulo : '',
  fecha_inicio : '',
  fecha_final : '',
  descrip_for : '',
  promedio : '',
};


  botonName:string = "Guardar Nueva Formación";
  botonNameEdit:string = "Editar Proyecto";

  showEditForma:boolean = false;
  showNewForma:boolean = false;
  
  authUser: boolean = false;
  cDrag:boolean = false;
  
  subscription?: Subscription;
  subscriptionNew?: Subscription;

  
  useSelect: boolean = false;

  image: any 

faXmark = faXmark;

  constructor(
    private service:FormQuestionService,
    private auth:AuthService,
    
    private dFor : DatosFormacionService,
    private uiService: UiServiceService,
  ) { 

    this.subscriptionNew = this.uiService.onToogleNF()
    .subscribe(value => this.showNewForma = value);
    this.subscription = this.uiService.onToogleEF()
    .subscribe(value => this.showEditForma = value);
    
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
    this.dFor.obtenerFor().subscribe((res)=>{
      this.forms = res.sort(((a, b)=> { 
        return  b.promedio  - a.promedio 
       } ))
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

  toogleNewForma(){
    this.uiService.toogleNewForma();
  }
  toogleEditForma(){
    this.uiService.toogleEditForma()
  }


  borrarForm(form:Formacion){
    this.dFor.borrarForm(form)
    .subscribe(
      ()=> {
        this.forms = this.forms.filter((f) => f.id !== form.id)
      }
    )
    setTimeout(()=> {
      this.dFor.obtenerFor().subscribe((res)=>{
        this.forms = res.sort(((a, b)=> { 
          return  b.promedio  - a.promedio 
         } ))
      })

     },900)  
  }

  newForm(form:Formacion){  
    form.persona_id=6;
     this.dFor.newForma(form).subscribe()

     setTimeout(()=> {

      this.dFor.obtenerFor().subscribe((res)=>{
        this.forms = res.sort(((a, b)=> { 
          return  b.promedio  - a.promedio 
         } ))
      })
     },900)  
  }

  editForma(form:Formacion){
  
      this.dFor.editarForm(form).subscribe()

      setTimeout(()=> {this.dFor.obtenerFor().subscribe((res)=>{
        this.forms = res.sort(((a, b)=> { 
          return  b.promedio  - a.promedio 
         } ))
      })},1000) 
  }

  select(form:Formacion) {
    this.questionsValues$ = form
    console.log(this.questionsValues$)

    this.useSelect = !this.useSelect

    setTimeout(() => {
      this.useSelect = !this.useSelect
    }, 500)

  }


  // handleImage(event : any): void{
  //   if(!event.target.files){
  //   } else {
  //     this.image = event.target.files[0]
  //     console.log(this.image)
  //   }
  
  // }

}

//  No olvidar agregar esto
// (formOutput)="newProy($event)"