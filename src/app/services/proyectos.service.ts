import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona';
import { Experiencia } from '../experiencia';
import { Formacion } from '../formacion';
import { Proyecto } from '../proyecto';


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

  
rutaApiProy = 'http://localhost:8080/ver/proyectos';
rutaApiProyEdit = 'http://localhost:8080/editar/proyectos';
rutaApiProyDelete = 'http://localhost:8080/delete/proyecto';
rutaApiNewProy = 'http://localhost:8080/new/proyecto';

  constructor(private http:HttpClient) { }


  obtenerProy(){
    return this.http.get<Proyecto[]>( this.rutaApiProy)
  }
  borrarProy(proy: Proyecto): Observable<Proyecto>{
    const url = `${this.rutaApiProyDelete}/${proy.id}`
    return this.http.delete<Proyecto>( url )
  }
  editarProy(proy: Proyecto): Observable<Proyecto>{
    const url = `${this.rutaApiProyEdit}/${proy.id}`
    return this.http.put<Proyecto>( url, proy, httpOptions)
  }
  newProy(proy: Proyecto): Observable<Proyecto>{
    const url = `${this.rutaApiProyEdit}/${proy.id}`
    return this.http.post<Proyecto>( this.rutaApiNewProy, proy, httpOptions)
  }
  
}