import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-close-button-b',
  templateUrl: './close-button-b.component.html',
  styleUrls: ['./close-button-b.component.less']
})
export class CloseButtonBComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  faXmark = faXmark;

  constructor() { }
  ngOnInit(): void {
  }

  onClick(){
  
    this.btnClick.emit();

  }
}

