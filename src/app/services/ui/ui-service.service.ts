import {
  Injectable
} from '@angular/core';
import {
  Observable,
  Subject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private showEditProy: boolean = false;
  private showNewProy: boolean = false;
  private showEditExp: boolean = false;
  private showNewExp: boolean = false;
  private showEditHab: boolean = false;
  private showNewHab: boolean = false;
  private showNUHab: boolean = false;

  private subject = new Subject < any > ();
  private subject2 = new Subject < any > ();
  private subjectE = new Subject < any > ();
  private subjectNE = new Subject < any > ();
  private subjectH = new Subject < any > ();
  private subjectNH = new Subject < any > ();
  private subjectUH = new Subject < any > ();

  constructor() {}




// toogleEdit() and toogleNew() ------------------------------------

// Proy
  toogleEditProy(): void {
    this.showEditProy = !this.showEditProy;
    this.subject.next(this.showEditProy);
  }
  toogleNewProy(): void {

    this.showNewProy = !this.showNewProy;
    this.subject2.next(this.showNewProy);
  }

// Exp
  toogleEditExp(): void {

    this.showEditExp = !this.showEditExp;
    this.subjectE.next(this.showEditExp);
  }
  toogleNewExp(): void {

    this.showNewExp = !this.showNewExp;
    this.subjectNE.next(this.showNewExp);
  }

// Forma

// Habs

toogleEditHabs(): void {

  this.showEditHab = !this.showEditHab;
  this.subjectH.next(this.showEditHab);
}
toogleNewHabs(): void {

  this.showNewHab = !this.showNewHab;
  this.subjectNH.next(this.showNewHab);
}
toogleNUHabs(): void {

  this.showNUHab = !this.showNUHab;
  this.subjectUH.next(this.showNUHab);
}


// onToogles()

//Exp 
onToogleE(): Observable < any > {

    return this.subjectE.asObservable();
  }
  onToogleNE(): Observable < any > {

    return this.subjectNE.asObservable();
  }

// proy
  onToogle(): Observable < any > {

    return this.subject.asObservable();
  }

  onToogleNew(): Observable < any > {

    return this.subject2.asObservable();
  }

// Habs

  onToogleH(): Observable < any > {

    return this.subjectH.asObservable();
  }
  onToogleNH(): Observable < any > {

    return this.subjectNH.asObservable();
  }
  onToogleUH(): Observable < any > {

    return this.subjectUH.asObservable();
  }



}