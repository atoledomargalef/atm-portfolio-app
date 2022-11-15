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
verProy = 'https://polar-coast-76091.herokuapp.com/ver/proyectos';
proyEdit = 'https://polar-coast-76091.herokuapp.com/editar/proyectos2';
proyDelete = 'https://polar-coast-76091.herokuapp.com/delete/proyecto';
newLProy = 'https://polar-coast-76091.herokuapp.com/new/proyecto';

  constructor(private http:HttpClient) { 

    }
  
    useSelect:boolean = false
  obtenerProy(){
    return this.http.get<Proyecto[]>( `${this.verProy}`)
  }
  borrarProy(proy: Proyecto): Observable<Proyecto>{
    const url = `${this.proyDelete}/${proy.id}`
    return this.http.delete<Proyecto>( url , httpOptions)
  }

  editarProy(proy: Proyecto): Observable<Proyecto>{
    this.useSelect = !this.useSelect
    setTimeout(()=> {
      this.useSelect=!this.useSelect
    },500)
    return this.http.put<Proyecto>( `${this.proyEdit}/${proy.id}`, proy, httpOptions)
  }



newProy(proy:Proyecto){
   const url = `${this.newLProy}`
    this.http.post<Proyecto>(url, proy, httpOptions).subscribe()

  }
 // Error handling



 
  
}