import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona';
import { Experiencia } from '../experiencia';
import { Formacion } from '../formacion';
import { catchError, throwError } from 'rxjs';


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
export class DatosPersonaService {
  // https://polar-coast-76091.herokuapp.com
  // http://localhost:8080/ver/personas
rutaApi = 'https://polar-coast-76091.herokuapp.com/ver/personas'
rutaApiEdit = 'https://polar-coast-76091.herokuapp.com/editar/persona2/6'

data:any = []

  constructor( private http:HttpClient) { }

  obtener(){
    return this.http.get<Persona[]>( this.rutaApi, httpOptions)
  }

  editarPer(per :Persona): Observable<Persona>{
    
    console.log("editper 2")
    return this.http.put<Persona>( this.rutaApiEdit, per, httpOptions)
  
  }



}
