import { Component, OnInit } from '@angular/core';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { Persona } from 'src/app/persona';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})

export class ProfileComponent implements OnInit{

  constructor(private persoServ: DatosPersonaService) { }


  data: any = {}

  ngOnInit(){
  
    this.persoServ.obtener().subscribe((res:any) => {

      this.data=res[0]
  
    });
  }



}
