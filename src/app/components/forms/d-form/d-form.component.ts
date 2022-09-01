import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { ProyectosComponent } from '../../main/proyectos/proyectos.component';
import { Imagen } from 'src/app/img';
import { QuestionImgService } from '../questionImg.service';
@Component({
  selector: 'app-d-form',
  templateUrl: './d-form.component.html',
  styleUrls: ['./d-form.component.less'],
  providers: [QuestionImgService]
})
export class DFormComponent implements OnInit {
  @Input() botonName:string = "";
  @Input() questions: QuestionBase<string>[] | null = [];
  @Output() formOutput: EventEmitter<any> = new EventEmitter();
  @Output() imgProy: EventEmitter<any> = new EventEmitter();
  form!: UntypedFormGroup;
  payLoad = '';

  constructor( private qcs: QuestionControlService) { }

  ngOnInit(): void {
    this.form =this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.formOutput.emit(this.form.value);
   

  }

}
