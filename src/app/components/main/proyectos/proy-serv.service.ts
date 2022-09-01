import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Proyecto } from 'src/app/proyecto';

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
export class ProyServService {
 public imagenRepo : any;


rutaApi = 'https://polar-coast-76091.herokuapp.com';
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

  
  editarProy(proy: Proyecto): Observable<Proyecto>{
    const url = `${this.rutaApi}${this.proyEdit}/${proy.id}`
    return this.http.put<Proyecto>( url, proy, httpOptions)
  }



newProy(proy:Proyecto){
  
  console.log(proy + "2")
    this.http.post<Proyecto>(`${this.rutaApi}${this.newLProy}`, proy, httpOptions).subscribe(res => console.log(res))

  }
 // Error handling



 
  
}