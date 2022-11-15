import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { Persona } from 'src/app/persona';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']

})

export class ProfileComponent implements OnInit{

  data:any
  
  constructor(private persoServ: DatosPersonaService) {
    this.persoServ.obtenerPersonas$().subscribe((res:any) => {
      this.data=res[0]})
  }
  
  ngOnInit(){
    
  }

}
