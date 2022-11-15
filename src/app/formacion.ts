import { Observable } from "rxjs";

export interface Formacion{

    id? : number;
    titulo : string;
    fecha_inicio : string;
    fecha_final : string;
    logo_inst : Observable<string>;
    descrip_for : string;
    promedio : number;
    persona_id : number;

}