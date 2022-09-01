import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-proy-item',
  templateUrl: './proy-item.component.html',
  styleUrls: ['./proy-item.component.less']
})
export class ProyItemComponent implements OnInit {

  proys: Proyecto[] = []
  faXmark = faXmark;
  boton_ver:string = "Ver Proyecto"

  @Input() proy: Proyecto = this.proys[0];
  @Output() onDeleteProy: EventEmitter<Proyecto> = new EventEmitter();


  showEditProy: boolean = false;
  subscription: Subscription;

  authUser: boolean = false;

  constructor(
    private uiService: UiServiceService,private auth:AuthService
  ) {

    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.showEditProy = value)

   }

  ngOnInit(): void {
    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
    } else {
      this.authUser = false;
    }

  }
  onDelete(proy: Proyecto){
    this.onDeleteProy.emit(proy);
    console.log("boton")
  }
}
