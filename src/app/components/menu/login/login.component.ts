import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form:FormGroup;


  constructor( private formbuilder:FormBuilder , private authService:AuthService, private ruta:Router) {
    this.form= this.formbuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]]

      }

    )


   }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email')
  }
  get Password(){
    return this.form.get('password')
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.authService.logIn(this.form.value)
                    .subscribe(data=>{
                      console.log("DATA: " + JSON.stringify(data));
                      this.ruta.navigate(['/portfolio']);
                    })
  }

}
