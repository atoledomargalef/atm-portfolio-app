import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/proyecto';
import { ProyectosService } from 'src/app/services/proyectos.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.less']
})
export class ProyectosComponent implements OnInit {

  proys: Proyecto[] = [];
  showEditProy:boolean = false;
  subscription?: Subscription;

  constructor(private proyService : ProyectosService ,private uiService: UiServiceService) { }

  ngOnInit(): void {
  
    this.proyService.obtenerProy().subscribe((res)=>{
      this.proys = res
      console.log(this.proys)
    })
  }

  toogleEditProy(){
    this.uiService.toggleEditProy();
    console.log(this.showEditProy)
   }

  borrarProy(proy:Proyecto){
    this.proyService.borrarProy(proy)
    .subscribe(
      ()=> {
        this.proys = this.proys.filter((p) => p.id !== proy.id)
      }
    )
  }
  newProy(proy:Proyecto){
    this.proyService.newProy(proy)
    .subscribe((proy) =>{
      this.proys.push(proy)
    })
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.proys, event.previousIndex, event.currentIndex);
  }

}
