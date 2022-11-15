import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup , FormGroup} from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { QuestionBase } from 'src/app/components/forms/question-base';
import { ProyQuestionService } from 'src/app/components/main/proyectos/proy-question.service';
import { Persona } from 'src/app/persona';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { PerQuestionService } from '../per-question.service';

@Component({
  selector: 'app-edit-per',
  templateUrl: './edit-per.component.html',
  styleUrls: ['./edit-per.component.less'],
  providers: [PerQuestionService]
})
export class EditPerComponent implements OnInit {
  
  @Input() data:any
  @Output() formOutput: EventEmitter<any> = new EventEmitter();
  
  

  datos:any={}

  showEditPer:boolean = false;
  subscription?: Subscription;

  botonName:string="Editar Datos Personales"
  form!: FormGroup;
  questions$: Observable<QuestionBase<any>[]>;
  questionsValues$ :any;

  faXmark = faXmark;
  constructor( private uiService : UiServiceService, private perService: DatosPersonaService, private service:PerQuestionService) {
    
    this.subscription = this.uiService.onToogleEP()
    .subscribe(value => this.showEditPer = value);
    this.obtenerData()
    
    this.questions$ = this.service.getQuestions();
    
   }

   obtenerData() :void {
    this.perService.obtenerPersonas$().subscribe((res:any) => {
      this.datos=res[0]})
   }

  ngOnInit(): void {
    this.questions$ = this.service.getQuestions();
    setTimeout(()=> {this.questionsValues$ = this.datos},500)
  }

  ngOnChange():void{
    this.obtenerData()
  }

  toogleEditPer(){
    this.uiService.toogleEditPer();
   }

   editPer(per:Persona){
    this.perService.editarPer(per).subscribe((per)=> per)
    location.reload()
  }
}
