import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona';
import { Experiencia } from '../experiencia';
import { Formacion } from '../formacion';

@Injectable({
  providedIn: 'root'
})
export class DatosExperienciaService {


  rutaApiExp = 'http://localhost:8080/ver/experiencias';


  constructor(private http : HttpClient) { }


  
  obtenerExp(){
    return this.http.get<Experiencia[]>( this.rutaApiExp)
  }
}
