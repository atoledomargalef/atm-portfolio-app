import { Component, OnInit } from '@angular/core';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(private persoServ: DatosPersonaService) { }


  data: any = {}

  ngOnInit(){
  
    this.persoServ.obtenerPersonas$().subscribe((res:any) => {

      this.data=res[0]
  
    });
  }

}
