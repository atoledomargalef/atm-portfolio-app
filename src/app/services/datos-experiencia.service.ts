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


  rutaApiExp = 'https://back-portfolio-prod-portfolio-app-13gswm.mo6.mogenius.io/ver/experiencias';
  rutaApiNewExp = 'https://back-portfolio-prod-portfolio-app-13gswm.mo6.mogenius.io/new/experiencia';
  rutaApiEditExp = 'https://back-portfolio-prod-portfolio-app-13gswm.mo6.mogenius.io/editar/experiencia2';
  rutaApi = 'https://back-portfolio-prod-portfolio-app-13gswm.mo6.mogenius.io/';
  expDelete = 'https://back-portfolio-prod-portfolio-app-13gswm.mo6.mogenius.io/delete/experiencia/';


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
