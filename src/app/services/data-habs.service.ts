import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../habilidades';

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
export class DataHabsService {
    
  rutaApiHabs = 'http://localhost:8080/ver/habilidades';
  rutaApiHabsEdit = 'http://localhost:8080/editar/habilidades';
  rutaApiHabsDelete = 'http://localhost:8080/delete/habilidades';
  rutaApiNewHabs = 'http://localhost:8080/new/habilidades';
  
    constructor(private http:HttpClient) { }
  
  
    obtenerHab(){
      return this.http.get<Habilidades[]>( this.rutaApiHabs)
    }
    borrarHab(hab: Habilidades): Observable<Habilidades>{
      const url = `${this.rutaApiHabsDelete}/${hab.id}`
      return this.http.delete<Habilidades>( url )
    }
    editarHab(hab: Habilidades): Observable<Habilidades>{
      const url = `${this.rutaApiHabsEdit}/${hab.id}`
      return this.http.put<Habilidades>( url, hab, httpOptions)
    }
    newHab(hab: Habilidades): Observable<Habilidades>{
      return this.http.post<Habilidades>( this.rutaApiNewHabs, hab, httpOptions)
    }
    
  }