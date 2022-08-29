import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, MinLengthValidator } from '@angular/forms';
import { Imagen } from 'src/app/img';
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
  @Input() form!: FormGroup;

  @Output() imgProy: EventEmitter<any> =  new EventEmitter();
  public archivo : Imagen;
 file!: any;
  public lastPK : number;
  constructor(
    ) { }

  ngOnInit(): void {
    
  }


  fileEvent(event: any){
    
    this.file = event.target.files[0];
    console.log(this.file)


      this.archivo = new Imagen(this.lastPK + 1, event.name, event.type)
      console.log(event.name)
     
  }

  get isValid() { return this.form.controls[this.question.key].valid; }
  
}
