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
    
  rutaApiHabs = 'https://polar-coast-76091.herokuapp.com/ver/habilidades';
  rutaApiHabsEdit = 'https://polar-coast-76091.herokuapp.com/editar/habilidades';
  rutaApiHabsDelete = 'https://polar-coast-76091.herokuapp.com/delete/habilidades';
  rutaApiNewHabs = 'https://polar-coast-76091.herokuapp.com/new/habilidades';
  
    constructor(private http:HttpClient) { }
  
  
    obtenerHab(){
      return this.http.get<Habilidades[]>( this.rutaApiHabs)
    }
  
    newHab(hab: Habilidades): Observable<Habilidades>{
      return this.http.post<Habilidades>( this.rutaApiNewHabs, hab, httpOptions)
    }
    borrarHab(hab: Habilidades): Observable<Habilidades>{
      const url = `${this.rutaApiHabsDelete}/${hab.id}`
      return this.http.delete<Habilidades>( url )
    }

    

    editarHab(hab: Habilidades): Observable<Habilidades>{
      const url = `${this.rutaApiHabsEdit}/${hab.id}?porcentaje=${hab.porcentaje}&habilidades=${hab.habilidades}&descripcion=${hab.descripcion}`
      return this.http.put<Habilidades>( url, hab, httpOptions)
    }
  }