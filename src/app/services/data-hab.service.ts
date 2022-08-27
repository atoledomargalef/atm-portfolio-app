import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hab } from '../hab';

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
export class DataHabService {
    
  rutaApiHab = 'http://localhost:8080/ver/habilidad';
  rutaApiHabEdit = 'http://localhost:8080/editar/habilidad';
  rutaApiHabDelete = 'http://localhost:8080/delete/habilidad';
  rutaApiNewHab = 'http://localhost:8080/new/habilidad';
  
    constructor(private http:HttpClient) { }
  
  
    obtenerUHab(){
      return this.http.get<Hab[]>( this.rutaApiHab)
    }
    borrarUHab(hab: Hab): Observable<Hab>{
      const url = `${this.rutaApiHabDelete}/${hab.id}`
      return this.http.delete<Hab>( url )
    }
    editarUHab(hab: Hab): Observable<Hab>{
      const url = `${this.rutaApiHabEdit}/${hab.id}`
      return this.http.put<Hab>( url, hab, httpOptions)
    }
    newUHab(hab: Hab): Observable<Hab>{
      return this.http.post<Hab>( this.rutaApiNewHab, hab, httpOptions)
    }
    
  }