import { Component, OnInit } from '@angular/core';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { DatosExperienciaService } from 'src/app/services/datos-experiencia.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Formacion } from 'src/app/formacion';
import { Experiencia } from 'src/app/experiencia';
import { Proyecto } from 'src/app/proyecto';
import { DatosFormacionService } from 'src/app/services/datos-formacion.service';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { ProyectosComponent } from './proyectos/proyectos.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  
  exps : Experiencia[] = [];
  forms : Formacion[] = [];

  constructor(
    
    private dExp : DatosExperienciaService,
    private dFor : DatosFormacionService,
    ) { }

  ngOnInit( ): void {



    this.dExp.obtenerExp().subscribe((res)=>{
      this.exps = res
      console.log(this.exps)
    })

    this.dFor.obtenerFor().subscribe((res)=>{
      this.forms = res
      console.log(this.forms)
    })

   


  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.exps, event.previousIndex, event.currentIndex);
  }

}
