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

  
rutaApiFor = 'https://polar-coast-76091.herokuapp.com/ver/formacion';
verForm = '/ver/formacion'
rutaApi = 'https://polar-coast-76091.herokuapp.com';
formDelete = '/delete/formacion';
formNew = '/new/formacion';

  constructor(private http:HttpClient) { }





  obtenerFor(){
    const url = `${this.rutaApi}${this.verForm}`
    return this.http.get<Formacion[]>( url)
  }


  newForma(forma: Formacion):Observable<Formacion>{
const url = `${this.rutaApi}${this.formNew}`
    return this.http.post<Formacion>(url, forma, httpOptions)
  }


  borrarForm(form: Formacion): Observable<Formacion>{
    const url = `${this.rutaApi}${this.formDelete}/${form.id}`
    return this.http.delete<Formacion>( url , httpOptions)
  }
  
}
