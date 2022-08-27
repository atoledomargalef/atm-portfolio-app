import { Component, Input, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Formacion } from 'src/app/formacion';

@Component({
  selector: 'app-for-item',
  templateUrl: './for-item.component.html',
  styleUrls: ['./for-item.component.less']
})
export class ForItemComponent implements OnInit {
  
  forms: Formacion[] = [];

  @Input() form: Formacion = this.forms[0];
  
  faXmark = faXmark;
  constructor() { }

  ngOnInit(): void {
  }

}
