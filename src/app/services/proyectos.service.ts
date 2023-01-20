import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona';
import { Experiencia } from '../experiencia';
import { Formacion } from '../formacion';
import { Proyecto } from '../proyecto';
import { Imagen } from '../img';
import { FileI } from '../fileI';
import { catchError, finalize, map, retry, switchMap, throwError } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {



  public imagenRepo : any;


rutaApi = 'https://back-portfolio-prod-portfolio-app-13gswm.mo6.mogenius.io';
verProy = '/ver/proyectos';
proyEdit = '/editar/proyectos';
proyDelete = '/delete/proyecto';
newLProy = '/new/proyecto';

  constructor(private http:HttpClient) { 

    }

  obtenerProy(){
    return this.http.get<Proyecto[]>( `${this.rutaApi}${this.verProy}`)
  }
  borrarProy(proy: Proyecto): Observable<Proyecto>{
    const url = `${this.rutaApi}${this.proyDelete}/${proy.id}`
    return this.http.delete<Proyecto>( url )
  }
  private extractData(res: any) {
    let body = res;
    return body;
  }
  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  } 
  
  editarProy(proy: Proyecto): Observable<Proyecto>{
    const url = `${this.rutaApi}${this.proyEdit}/${proy.id}`
    return this.http.put<Proyecto>( url, proy, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
    );
  }



newProy(proy:Proyecto):Observable<Proyecto>{
  

    return this.http.post<Proyecto>(`${this.rutaApi}${this.newLProy}`, proy, httpOptions)

  }
 // Error handling



 
  
}