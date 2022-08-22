import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pro-edit',
  templateUrl: './pro-edit.component.html',
  styleUrls: ['./pro-edit.component.less']
})
export class ProEditComponent implements OnInit {



  @Output() onNewProy: EventEmitter<Proyecto> = new EventEmitter();

  descrip_proj:string = "";
  titulo:string = "";
  link_proj:string = "";
  img_proyecto:string = "";
  habilidades:string = "";
  persona_id: number = 6;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.descrip_proj.length === 0){
        alert("Please add a text in the Task!!")
        return
    }

    const {titulo,descrip_proj,link_proj,img_proyecto,habilidades,persona_id} = this
    const newProy = {titulo,descrip_proj,link_proj,img_proyecto,habilidades,persona_id}


    this.onNewProy.emit(newProy);
  }
}
