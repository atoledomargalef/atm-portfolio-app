import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.less']
})
export class ExpEditComponent implements OnInit {

  faXmark = faXmark;
  constructor() { }

  ngOnInit(): void {
  }

}
