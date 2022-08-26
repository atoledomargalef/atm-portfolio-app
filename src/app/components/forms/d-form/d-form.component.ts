import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { ProyectosComponent } from '../../main/proyectos/proyectos.component';
@Component({
  selector: 'app-d-form',
  templateUrl: './d-form.component.html',
  styleUrls: ['./d-form.component.less']
})
export class DFormComponent implements OnInit {
  @Input() botonName:string = "";
  @Input() questions: QuestionBase<string>[] | null = [];
  @Output() formOutput: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;
  payLoad = '';

  constructor( private qcs: QuestionControlService) { }

  ngOnInit(): void {
    this.form =this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);

  }

  onSubmit() {
    this.formOutput.emit(this.form.value);
  }

}
