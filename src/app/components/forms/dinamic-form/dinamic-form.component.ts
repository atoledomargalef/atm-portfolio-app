import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, MinLengthValidator } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.less']
})
export class DinamicFormComponent {
  @Input() question!: QuestionBase<any>;
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    
  }

  get isValid() { return this.form.controls[this.question.key].valid; }
  
}
