import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { catchError } from 'rxjs';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // https://polar-coast-76091.herokuapp.com
  url="https://polar-coast-76091.herokuapp.com/auth/login";
  currentUserSubject: BehaviorSubject<any>;



  constructor(private http:HttpClient) {

    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));

   }

   logIn(credenciales:any):Observable<any>{

      console.log(credenciales)
      return this.http.post(this.url, credenciales)
                      .pipe(map(data=>{

                        sessionStorage.setItem('currentUser', JSON.stringify(data));
                        this.currentUserSubject.next(data)

                        return data;
                      })).pipe(catchError(this.errorHandler))
   }

   errorHandler(error: HttpErrorResponse){

    return observableThrowError(error.status)

   }


   logOut(){
     localStorage.removeItem(this.UserAuth);
     sessionStorage.clear();
     this.currentUserSubject.next(null);

   }

   get UserAuth() {
     return this.currentUserSubject.value;
   }

}
