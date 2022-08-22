import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona';
import { Experiencia } from '../experiencia';
import { Formacion } from '../formacion';


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
export class DatosFormacionService {

  
rutaApiFor = 'http://localhost:8080/ver/formacion';
rutaApiForEdit = 'http://localhost:8080//formacion';
rutaApiForDelete = 'http://localhost:8080/ver/formacion';

  constructor(private http:HttpClient) { }





  obtenerFor(){
    return this.http.get<Formacion[]>( this.rutaApiFor)
  }
  editarFor(){
    return this.http.get<Formacion[]>( this.rutaApiFor)
  }

  
}
