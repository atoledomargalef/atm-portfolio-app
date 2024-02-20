import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import  Persona  from '../../persona';
import {Persons} from '../../personas.json'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  data:any;

  showEditPer:boolean = false;
  showPerInfo:boolean = false;

  subscription?: Subscription;
  subscriptionI?: Subscription;

  useSelect:boolean = false;
  constructor( private uiService: UiServiceService ,private persoServ: DatosPersonaService ) {
    this.subscription = this.uiService.onToogleEP()
    .subscribe(value => this.showEditPer = value);

    this.subscriptionI = this.uiService.onTooglePI()
    .subscribe(value => this.showPerInfo = value);
    // this.useSelect = this.persoServ.useSelect
   
  }


  ngOnInit():void {
    // this.persoServ.obtenerPersonas$().subscribe((res:any) => {
    //   this.data=res[0]})

    this.persoServ = Persons[0]
  }
  
   tooglePerInfo(){
    this.uiService.tooglePerInfo();
   }

}
