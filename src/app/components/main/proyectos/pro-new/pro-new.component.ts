import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  Proyecto
} from 'src/app/proyecto';
import {
  Subscription
} from 'rxjs';
import {
  faXmark, faXmarkCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  UiServiceService
} from 'src/app/services/ui/ui-service.service';


@Component({
  selector: 'app-pro-new',
  templateUrl: './pro-new.component.html',
  styleUrls: ['./pro-new.component.less']
})
export class ProNewComponent implements OnInit {
  @Output() onNewProy: EventEmitter < Proyecto > = new EventEmitter();

  descrip_proj: string = "";
  titulo: string = "";
  link_proj: string = "";
  img_proyecto: string = "";
  habilidades: string = "";
  persona_id: number = 6;
  faXmark = faXmark;
  faXmarkCircle = faXmarkCircle;

  showNewProy: boolean = true;
  subscription ? : Subscription;


  constructor(
    private uiService: UiServiceService
  ) {

    this.subscription = this.uiService.onToogleNew()
      .subscribe(value => this.showNewProy = value)

  }



  ngOnInit(): void {}

  toogleNewProy() {
    this.uiService.toogleNewProy();
  }
  onSubmit() {
    if (this.descrip_proj.length === 0) {
      alert("Please add a text in the Task!!")
      return
    }

    const {
      titulo,
      descrip_proj,
      link_proj,
      img_proyecto,
      habilidades,
      persona_id
    } = this
    const newProy = {
      titulo,
      descrip_proj,
      link_proj,
      img_proyecto,
      habilidades,
      persona_id
    }


    this.onNewProy.emit(newProy);
  }
}