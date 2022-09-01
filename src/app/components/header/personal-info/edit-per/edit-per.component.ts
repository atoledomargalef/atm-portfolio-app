import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  
  @Output() formOutput: EventEmitter<any> = new EventEmitter();
  
  showEditPer:boolean = false;
  subscription?: Subscription;

  botonName:string="Editar Datos Personales"
  form!: FormGroup;
  questions$: Observable<QuestionBase<any>[]>;


  faXmark = faXmark;
  constructor( private uiService : UiServiceService, private perService: DatosPersonaService, private service:PerQuestionService) {
    
    this.subscription = this.uiService.onToogleEP()
    .subscribe(value => this.showEditPer = value);

    
    this.questions$ = this.service.getQuestions();

   }

  ngOnInit(): void {
    this.questions$ = this.service.getQuestions();
  }

  toogleEditPer(){
    this.uiService.toogleEditPer();
   }

   editPer(per:Persona){
     console.log("editper 1")
    this.perService.editarPer(per)
   

  }
}
