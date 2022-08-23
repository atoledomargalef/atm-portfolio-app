import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.less']
})
export class EditButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  faPen = faPenToSquare;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  
    this.btnClick.emit();
    console.log("boton");

  }
}
