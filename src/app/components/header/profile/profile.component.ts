import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import  Persona  from 'src/app/persona';
import { Observable } from 'rxjs';
import { Persons } from '../../../personas.json';
import { Subscription } from 'rxjs';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']

})

export class ProfileComponent implements OnInit{

  data:any
  
  subscriptionI?: Subscription;
  
  showPerInfo:boolean = false;
  
  constructor(private persoServ: DatosPersonaService, private uiService: UiServiceService) {
    this.persoServ = Persons[0]
    this.subscriptionI = this.uiService.onTooglePI()
    .subscribe(value => this.showPerInfo = value);
  }
  
  ngOnInit(){
    this.data = this.persoServ
  }
  tooglePerInfo(){
    this.uiService.tooglePerInfo();
   }

}
