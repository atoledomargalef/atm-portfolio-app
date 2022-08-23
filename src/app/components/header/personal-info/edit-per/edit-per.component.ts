import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-per',
  templateUrl: './edit-per.component.html',
  styleUrls: ['./edit-per.component.less']
})
export class EditPerComponent implements OnInit {

  constructor() { }

  faXmark = faXmark;
  ngOnInit(): void {
  }

}
