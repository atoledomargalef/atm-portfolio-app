import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Subscription } from 'rxjs';
import  Experiencia  from 'src/app/experiencia';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.less']
})
export class ExpItemComponent implements OnInit {

  authUser: boolean = false;
  exps: Experiencia[] = []
  faXmark = faXmark;
  
    @Input() exp: Experiencia = this.exps[0];
    @Output() onDeleteExp: EventEmitter<Experiencia> = new EventEmitter();



  showEditExp: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiServiceService,
    private auth:AuthService
  ) {

    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.showEditExp = value)

   }

  ngOnInit(): void {

    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
    } else {
      this.authUser = false;
    }
  }
  onDelete(exp: Experiencia){
    this.onDeleteExp.emit(exp);
    console.log("boton")
  }
}
