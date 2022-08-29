import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {


  showEditPer:boolean = false;
  showPerInfo:boolean = false;
  
  subscription?: Subscription;
  subscriptionI?: Subscription;

  constructor( private uiService: UiServiceService, ) {
    this.subscription = this.uiService.onToogleEP()
    .subscribe(value => this.showEditPer = value);

    this.subscriptionI = this.uiService.onTooglePI()
    .subscribe(value => this.showPerInfo = value);
   }

  ngOnInit(): void {




    
  }


   tooglePerInfo(){
    this.uiService.tooglePerInfo();
   }


}
