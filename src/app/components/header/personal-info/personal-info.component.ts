import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less']
})
export class PersonalInfoComponent implements OnInit {
  
  datos:any={}
  
  @Input() dato: any = this.datos[0];

  showEditPer:boolean = false;
  
  subscription?: Subscription;

  faXmark = faXmark;

  constructor( private persoServ : DatosPersonaService , private uiService : UiServiceService ) {

    this.subscription = this.uiService.onToogleEP()
    .subscribe(value => this.showEditPer = value);
  }



  ngOnInit(): void{
    this.persoServ.obtener().subscribe((res:any) => {
      this.datos=res[0]
  
    });
  }
  toogleEditPer(){
    this.uiService.toogleEditPer();
   }
}
