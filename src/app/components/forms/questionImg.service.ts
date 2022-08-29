import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
    Injectable
  } from "@angular/core";

import { Observable } from "rxjs";
import { Imagen } from "src/app/img";

  @Injectable()
  export class QuestionImgService {
  
    constructor(
        private http:HttpClient
    ) {

    }
  
    uploadFile(file : Imagen): Observable<any> {
        
        var peticion = "localhost:8080/new/img";
        var json = JSON.stringify(file);
        console.log(file);
        var headers = new HttpHeaders().set("Content-Type","application/json")
        return this.http.post(peticion, file, {headers});
        
    }
  
  
  
  }