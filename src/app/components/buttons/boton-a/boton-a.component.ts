import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-a',
  templateUrl: './boton-a.component.html',
  styleUrls: ['./boton-a.component.less']
})
export class BotonAComponent implements OnInit {

@Input() text="";

  constructor() { }

  ngOnInit(): void {
  }

}
