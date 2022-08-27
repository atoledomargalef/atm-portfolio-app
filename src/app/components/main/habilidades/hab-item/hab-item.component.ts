import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Habilidades } from 'src/app/habilidades';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-hab-item',
  templateUrl: './hab-item.component.html',
  styleUrls: ['./hab-item.component.less']
})
export class HabItemComponent implements OnInit {
  habs: Habilidades[] = []
  faXmark = faXmark;

  @Input() hab: Habilidades = this.habs[0];
  @Output() onDeleteHab: EventEmitter<Habilidades> = new EventEmitter();


  
  showEditHab: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiServiceService
  ) {
    

    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.showEditHab = value)

   }

  ngOnInit(): void {



  }

  onDelete(hab: Habilidades){
    this.onDeleteHab.emit(hab);
  }

}
