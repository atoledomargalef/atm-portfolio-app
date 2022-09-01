import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form:UntypedFormGroup;
  errorMessage:string="";

  constructor( private formbuilder:UntypedFormBuilder , private authService:AuthService, private ruta:Router) {
    this.form= this.formbuilder.group(
      {
        nombreUsuario:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]]

      }

    )


   }

  ngOnInit(): void {
  }

  get NombreUsuario(){
    return this.form.get('nombreUsuario')
  }
  get Password(){
    return this.form.get('password')
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.authService.logIn(this.form.value)
                    .subscribe(data=>{
                      this.ruta.navigate(['/portfolio']);
                    },(error) => {
                      if(error == 401){
                        this.errorMessage = "El Usuario o la Password son incorrectos"
                      }}
                    )
  }

}
