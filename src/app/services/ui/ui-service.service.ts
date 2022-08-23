import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private showEditProy:boolean = false;
  private subject = new Subject<any>();

  
  constructor() { }

  toggleEditProy(): void{
    
    this.showEditProy= !this.showEditProy;
    this.subject.next(this.showEditProy);

  }

  onToggle():Observable<any>{

    return this.subject.asObservable();

  }

}
