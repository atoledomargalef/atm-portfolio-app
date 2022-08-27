import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Subscription } from 'rxjs';
import { Experiencia } from 'src/app/experiencia';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.less']
})
export class ExpItemComponent implements OnInit {

  exps: Experiencia[] = []
  faXmark = faXmark;
  
    @Input() exp: Experiencia = this.exps[0];
    @Output() onDeleteExp: EventEmitter<Experiencia> = new EventEmitter();



  showEditExp: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiServiceService
  ) {

    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.showEditExp = value)

   }

  ngOnInit(): void {
  }
  onDelete(exp: Experiencia){
    this.onDeleteExp.emit(exp);
    console.log("boton")
  }
}
