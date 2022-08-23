import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.less']
})
export class AddButtonComponent implements OnInit {

faPlus = faCirclePlus;

  constructor() { }

  ngOnInit(): void {
  }

}
