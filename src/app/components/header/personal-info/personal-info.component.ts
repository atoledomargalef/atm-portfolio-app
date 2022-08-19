import { Component, OnInit } from '@angular/core';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less']
})
export class PersonalInfoComponent implements OnInit {



  constructor( private persoServ : DatosPersonaService ) {}

  dato:any={}

  ngOnInit(): void{
    this.persoServ.obtener().subscribe((res:any) => {
      this.dato=res[0]
  
    });
  }

}
