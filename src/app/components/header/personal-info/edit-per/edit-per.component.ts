import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';

@Component({
  selector: 'app-edit-per',
  templateUrl: './edit-per.component.html',
  styleUrls: ['./edit-per.component.less']
})
export class EditPerComponent implements OnInit {
  showEditPer:boolean = false;
  subscription?: Subscription;
  
  faXmark = faXmark;
  constructor( private uiService : UiServiceService) {
    
    this.subscription = this.uiService.onToogleEP()
    .subscribe(value => this.showEditPer = value);
   }

  ngOnInit(): void {
  }

  toogleEditPer(){
    this.uiService.toogleEditPer();
   }
}
