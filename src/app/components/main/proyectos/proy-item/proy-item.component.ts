import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';

@Component({
  selector: 'app-proy-item',
  templateUrl: './proy-item.component.html',
  styleUrls: ['./proy-item.component.less']
})
export class ProyItemComponent implements OnInit {

  proys: Proyecto[] = []
  
  @Input() proy: Proyecto = this.proys[0];
  @Output() onDeleteProy: EventEmitter<Proyecto> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(proy: Proyecto){
    this.onDeleteProy.emit(proy);
    console.log("boton")
  }
}
