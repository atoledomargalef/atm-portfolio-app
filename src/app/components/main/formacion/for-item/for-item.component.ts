import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Formacion } from 'src/app/formacion';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-for-item',
  templateUrl: './for-item.component.html',
  styleUrls: ['./for-item.component.less']
})
export class ForItemComponent implements OnInit {
  
  forms: Formacion[] = [];

  authUser: boolean = false;
  @Input() form: Formacion = this.forms[0];
  
  @Output() onDeleteForma: EventEmitter<Formacion> = new EventEmitter();
  
  faXmark = faXmark;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
    } else {
      this.authUser = false;
    }
  }

  onDelete(form: Formacion){
    this.onDeleteForma.emit(form);
    console.log("boton")
  }

}
