import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  inicioS:string = "Iniciar Sesion" 
  cierreS:string = "Cerrar Sesion" 

  authUser:boolean=false;
  constructor(private rutas:Router, private auth:AuthService) { }

  ngOnInit(): void {

    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token){
      this.authUser = true;
    } else {
      this.authUser = false;
    }

  }


  toLogin():void{
    this.rutas.navigate(['/login']);
  }
  logOut():void{
    this.auth.logOut();
    window.location.reload();

  }
}
