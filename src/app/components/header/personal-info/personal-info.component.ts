import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { ProfileComponent } from '../profile/profile.component';
import { Persons } from '../../../personas.json';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less']
})
export class PersonalInfoComponent implements OnInit {
  
  

  @Input() datos: any = {}


  showEditPer:boolean = false;
  
  authUser: boolean = false;

  subscription?: Subscription;

  faXmark = faXmark;
  questionsValues$:any;

  constructor( private persoServ : DatosPersonaService , private uiService : UiServiceService, private auth:AuthService ) {
    this.subscription = this.uiService.onToogleEP()
    .subscribe(value => this.showEditPer = value);
  }



  ngOnInit(): void{
    this.persoServ = Persons[0];
    this.datos = this.persoServ
    // this.obtenerData()
    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
    } else {
      this.authUser = false;
    }
  }



//   obtenerData(){
//   this.persoServ.obtenerPersonas$().subscribe((res:any) => {
//     this.datos=res[0]
//   })
// }

  toogleEditPer(){
    this.uiService.toogleEditPer();
    console.log(this.datos)
   }


}
