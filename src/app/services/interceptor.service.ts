import {HttpEvent , HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private auth : AuthService) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  
  var currentUser = this.auth.UserAuth;
  
  let token = localStorage.getItem('auth_token');
  


  // if( currentUser && currentUser.token){
  //   req=req.clone({
  //     headers: req.headers.set('Authorization', `Bearer ${currentUser.token}`)
  //   })
  //   console.log( " el Interceptor esta corriendo A")
  // }
  // return next.handle(req);


  if (!token) {
    return next.handle(req);
  }
const headers = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });
return next.handle(headers);

  


}



}


