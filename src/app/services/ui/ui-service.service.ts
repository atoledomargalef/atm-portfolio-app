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

  private showEditPer: boolean = false;
  private showPerInfo: boolean = false;
  private showEditProy: boolean = false;
  private showNewProy: boolean = false;
  private showEditExp: boolean = false;
  private showNewExp: boolean = false;
  private showEditHab: boolean = false;
  private showNewHab: boolean = false;
  private showEditForma: boolean = false;
  private showNewForma: boolean = false;
  private showNUHab: boolean = false;

  private subject = new Subject < any > ();
  private subject2 = new Subject < any > ();
  private subjectE = new Subject < any > ();
  private subjectNE = new Subject < any > ();
  private subjectH = new Subject < any > ();
  private subjectNH = new Subject < any > ();
  private subjectUH = new Subject < any > ();
  private subjectEP = new Subject < any > ();
  private subjectPI = new Subject < any > ();
  private subjectNF = new Subject < any > ();

  constructor() {}




// toogleEdit() and toogleNew() ------------------------------------

// Per

toogleEditPer(): void {
  this.showEditPer = !this.showEditPer;
  this.subjectEP.next(this.showEditPer);
}
tooglePerInfo(): void {
  this.showPerInfo = !this.showPerInfo;
  this.subjectPI.next(this.showPerInfo);
}

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
toogleNewForma(): void {

  this.showNewForma = !this.showNewForma;
  this.subjectNF.next(this.showNewForma);
}
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
onToogleEP(): Observable < any > {

  return this.subjectEP.asObservable();
}
onTooglePI(): Observable < any > {

  return this.subjectPI.asObservable();
}

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

  // Forma

  onToogleNF(): Observable < any > {

    return this.subjectNF.asObservable();
  }



}