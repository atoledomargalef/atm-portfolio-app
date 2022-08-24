import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.less']
})
export class AddButtonComponent implements OnInit {
  @Output() btnClickN = new EventEmitter();
faPlus = faCirclePlus;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  
    this.btnClickN.emit();
    console.log("boton add");

  }
}
