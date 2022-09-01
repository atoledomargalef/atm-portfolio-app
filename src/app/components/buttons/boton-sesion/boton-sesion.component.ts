import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-sesion',
  templateUrl: './boton-sesion.component.html',
  styleUrls: ['./boton-sesion.component.less']
})
export class BotonSesionComponent implements OnInit {

 @Input() text:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
