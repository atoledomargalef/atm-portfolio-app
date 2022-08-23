import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/experiencia';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.less']
})
export class ExperienciaComponent implements OnInit {


exps: Experiencia[] = [];

  @Input() exp: Experiencia = this.exps[0];
  faXmark = faXmark;


  constructor( ) { }

  ngOnInit(): void {



  }

}
