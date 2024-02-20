import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import  Experiencia  from '../experiencia';


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


  rutaApiExp = 'https://atm-portfolio-api-cloud.rj.r.appspot.com/ver/experiencias';
  rutaApiNewExp = 'https://atm-portfolio-api-cloud.rj.r.appspot.com/new/experiencia';
  rutaApiEditExp = 'https://atm-portfolio-api-cloud.rj.r.appspot.com/editar/experiencia2';
  rutaApi = 'https://atm-portfolio-api-cloud.rj.r.appspot.com/';
  expDelete = 'https://atm-portfolio-api-cloud.rj.r.appspot.com/delete/experiencia/';


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
