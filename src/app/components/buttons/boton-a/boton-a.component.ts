import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boton-a',
  templateUrl: './boton-a.component.html',
  styleUrls: ['./boton-a.component.less']
})
export class BotonAComponent implements OnInit {
@Output() btnAClick = new EventEmitter();
@Input() text="";
@Input() type="";
form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  
    this.btnAClick.emit();
    console.log("Show Personal Info");

  }
}
