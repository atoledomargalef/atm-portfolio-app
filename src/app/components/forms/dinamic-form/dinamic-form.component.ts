import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup, MinLengthValidator } from '@angular/forms';
import { Imagen } from 'src/app/img';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { QuestionBase } from '../question-base';
import { QuestionImgService } from '../questionImg.service';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.less'],
  providers: [ QuestionImgService]
  
})
export class DinamicFormComponent {
  @Input() question!: QuestionBase<any>;
  @Input() form!: UntypedFormGroup;

  @Output() imgProy: EventEmitter<any> =  new EventEmitter();

 file!: any;

  constructor( private proyServ : ProyectosService
    ) { 

      

    }

  ngOnInit(): void {
    
  }



  get isValid() { return this.form.controls[this.question.key].valid; }
  
}
