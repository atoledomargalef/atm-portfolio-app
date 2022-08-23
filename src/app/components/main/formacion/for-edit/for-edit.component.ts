import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-for-edit',
  templateUrl: './for-edit.component.html',
  styleUrls: ['./for-edit.component.less']
})
export class ForEditComponent implements OnInit {

  faXmark = faXmark;
  constructor() { }

  ngOnInit(): void {
  }

}
