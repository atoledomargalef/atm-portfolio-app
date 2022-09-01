import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-boton-a',
  templateUrl: './boton-a.component.html',
  styleUrls: ['./boton-a.component.less']
})
export class BotonAComponent implements OnInit {
@Output() btnAClick = new EventEmitter();
@Input() text="";
@Input() type="";
form!: UntypedFormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  
    this.btnAClick.emit();

  }
}
