import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/experiencia';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  
  exps : Experiencia[] = [];

  constructor(private datosPers : DatosPersonaService) { }

  ngOnInit( ): void {


    this.datosPers.obtenerExp().subscribe((res)=>{
      this.exps = res
      console.log(this.exps)
    })


  }

}
