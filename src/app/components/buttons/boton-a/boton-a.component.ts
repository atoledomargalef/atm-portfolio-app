import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boton-a',
  templateUrl: './boton-a.component.html',
  styleUrls: ['./boton-a.component.less']
})
export class BotonAComponent implements OnInit {

@Input() text="";
@Input() type="";
form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
