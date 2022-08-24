import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private showEditProy:boolean = false;
  private showNewProy:boolean = false;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();

  
  constructor() { }

  toogleEditProy(): void{
    
    this.showEditProy= !this.showEditProy;
    this.subject.next(this.showEditProy);
   

  }
  toogleNewProy(): void{

  this.showNewProy= !this.showNewProy;
  this.subject2.next(this.showNewProy);
  }

  onToogle():Observable<any>{

    return this.subject.asObservable();

  }
  onToogleNew():Observable<any>{

    return this.subject2.asObservable();

  }

}
