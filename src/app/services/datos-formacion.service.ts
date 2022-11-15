import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona';
import { Experiencia } from '../experiencia';
import { Formacion } from '../formacion';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';


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

private filePath:any;
// private downloadURL: Observable<string>;
private rutaApiFor = 'https://polar-coast-76091.herokuapp.com/ver/formacion';
private verForm = '/ver/formacion'
private rutaApi = 'https://polar-coast-76091.herokuapp.com';
private rutaApinew = 'https://polar-coast-76091.herokuapp.com/new/formacion';
private formDelete = 'https://polar-coast-76091.herokuapp.com/delete/formacion';
private formEdit = 'https://polar-coast-76091.herokuapp.com/editar/formacion2';

  constructor( private http:HttpClient, private storage : AngularFireStorage) {



   }


   useSelect:boolean = false


  obtenerFor(){
    const url = `${this.rutaApi}${this.verForm}`
    return this.http.get<Formacion[]>(url, httpOptions)
  }


  newForma(forma: Formacion):Observable<Formacion>{
      return this.http.post<Formacion>(this.rutaApinew, forma, httpOptions)
  }

  editarForm(form:Formacion): Observable<Formacion>{
    this.useSelect = !this.useSelect
    setTimeout(()=> {
      this.useSelect=!this.useSelect
    },500)

    const url = `${this.formEdit}/${form.id}`
    return this.http.put<Formacion>( url, form, httpOptions)
  }

  borrarForm(form: Formacion): Observable<Formacion>|any{
    const url = `${this.formDelete}/${form.id}`
    try {
      return this.http.delete<Formacion>( url , httpOptions)
    } catch (error) {
      console.log(error)
    }
  }

  saveForma(form: Formacion) {
    const formObj = {
      titulo:form.titulo,
      fecha_inicio:form.fecha_inicio,
      fecha_final:form.fecha_final,
      // logo_inst:this.downloadURL,
      descrip_for:form.descrip_for,
      promedio:form.promedio,
      persona_id:6,
    }
    console.log(formObj)
    // this.newForma(formObj).subscribe()
  }

preUploadImage(form:Formacion, image: any): void{
    this.uploadImage(form,image)
}
 uploadImage(form:Formacion, image: any){
    if(image){
      this.filePath = `assets/img/${image.name}`;
      const fileRef = this.storage.ref(this.filePath);
      const task = this.storage.upload(this.filePath, image);
      task.snapshotChanges()
      .pipe(
        finalize(()=>{
        fileRef.getDownloadURL().subscribe(urlImg => {
        // this.downloadURL=urlImg
        // console.log(this.downloadURL)
        this.saveForma(form)
        })
      })
        ).subscribe()
    }else{
      // console.log(this.downloadURL)
      this.saveForma(form)
    }
         
  }
  
}
