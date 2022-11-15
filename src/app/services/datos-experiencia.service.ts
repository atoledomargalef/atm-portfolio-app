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
export class DatosExperienciaService {


  rutaApiExp = 'https://polar-coast-76091.herokuapp.com/ver/experiencias';
  rutaApiNewExp = 'https://polar-coast-76091.herokuapp.com/new/experiencia';
  rutaApiEditExp = 'https://polar-coast-76091.herokuapp.com/editar/experiencia2';
  rutaApi = 'https://polar-coast-76091.herokuapp.com/';
  expDelete = 'https://polar-coast-76091.herokuapp.com/delete/experiencia/';


  constructor(private http : HttpClient) { }


  
  obtenerExp(){
    return this.http.get<Experiencia[]>( this.rutaApiExp)
  }

    newExp(exp:Experiencia):Observable<Experiencia>{
      console.log(exp)
      return this.http.post<Experiencia>(this.rutaApiNewExp, exp, httpOptions)
    }
    editarExp(exp:Experiencia):Observable<Experiencia>{
      console.log(exp)
      const url = `${this.rutaApiEditExp}/${exp.id}`
      return this.http.put<Experiencia>(url, exp, httpOptions)
    }

  borrarExp(exp: Experiencia): Observable<Experiencia>{
      const url = `${this.expDelete}${exp.id}`
      return this.http.delete<Experiencia>(url, httpOptions)
  }

}
