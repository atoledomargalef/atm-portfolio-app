import { Component, Input, OnInit } from '@angular/core';
import { Formacion } from 'src/app/formacion';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less']
})
export class FormacionComponent implements OnInit {


  
forms: Formacion[] = [];

@Input() form: Formacion = this.forms[0];

  constructor() { }

  ngOnInit(): void {
  }

}
