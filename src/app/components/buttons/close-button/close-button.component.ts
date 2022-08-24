import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.less']
})
export class CloseButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  faXmarkCircle = faXmarkCircle;

  constructor() { }
  ngOnInit(): void {
  }

  onClick(){
  
    this.btnClick.emit();

  }
}
