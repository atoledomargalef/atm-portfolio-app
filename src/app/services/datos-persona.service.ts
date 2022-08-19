import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona';
import { Experiencia } from '../experiencia';


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

rutaApi = 'http://localhost:8080/ver/personas'
rutaApiExp = 'http://localhost:8080/ver/experiencias'

data:any = []

  constructor( private http:HttpClient) { }

  obtener(){
    return this.http.get<Persona[]>( this.rutaApi)

  }

  obtenerExp(){
    return this.http.get<Experiencia[]>( this.rutaApiExp)

  }
  
}
