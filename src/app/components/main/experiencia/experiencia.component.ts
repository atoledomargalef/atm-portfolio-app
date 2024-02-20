import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import  Experiencia  from 'src/app/experiencia';
import { DatosPersonaService } from 'src/app/services/datos-persona.service';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UiServiceService } from 'src/app/services/ui/ui-service.service';
import { Observable, Subscription } from 'rxjs';
import { QuestionService } from '../../forms/question.service';
import { QuestionBase } from '../../forms/question-base';
import { ProyQuestionService } from '../proyectos/proy-question.service';
import { DatosExperienciaService } from 'src/app/services/datos-experiencia.service';
import { AuthService } from 'src/app/services/auth.service';
import { ExpQuestionService } from './expQuestion.service';
import { Experiencias } from '../../../experiencias.json';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.less'],
  providers: [ExpQuestionService]
})
export class ExperienciaComponent implements OnInit {


  exps: Experiencia[] = [];

  questions$: Observable<QuestionBase<any>[]>;
  questionsValues$: any = {
    id: 0,
    habilidades: '',
    descripcion: '',
    porcentaje: 0,
  };

  @Input() exp: Experiencia = this.exps[0];
  faXmark = faXmark;

  botonName: string = "Guardar Nueva Experiencia";
  botonNameEdit: string = "Editar Experiencia";

  showEditExp: boolean = false;
  showNewExp: boolean = false;

  authUser: boolean = false;

  subscription?: Subscription;
  subscriptionNew?: Subscription;
  useSelect: boolean = false;

  constructor(private expService: DatosExperienciaService,
    private uiService: UiServiceService,
    private service: ExpQuestionService,
    private auth: AuthService,
  ) {

    this.subscription = this.uiService.onToogleE()
      .subscribe(value => this.showEditExp = value);
    this.subscriptionNew = this.uiService.onToogleNE()
      .subscribe(value => this.showNewExp = value);
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {

    this.exps = Experiencias.sort(((a, b) => {
      if (b.fecha_final > a.fecha_final) {
        return 1
      } if (b.fecha_final < a.fecha_final) {
        return -1
      }
      return 0
    }))

    // this.expService.obtenerExp().subscribe((res) => {
    //   this.exps = res.sort(((a, b) => {
    //     if (b.fecha_final > a.fecha_final) {
    //       return 1
    //     } if (b.fecha_final < a.fecha_final) {
    //       return -1
    //     }
    //     return 0
    //   }))
    // })
    let currentUser = this.auth.UserAuth;
    if (currentUser && currentUser.token) {
      this.authUser = true;
    } else {
      this.authUser = false;
    }


  }
  // Toogles de aparicion

  toogleEditExp() {
    this.uiService.toogleEditExp();
  }

  toogleNewExp() {
    this.uiService.toogleNewExp();
  }
  // CRUD del Proyecto

  borrarExp(exp: Experiencia) {
    this.expService.borrarExp(exp)
      .subscribe(
        () => {
          this.exps = this.exps.filter((e) => e.id !== exp.id)
        }
      )
      setTimeout(()=> {this.expService.obtenerExp().subscribe((res) => {
        this.exps = res.sort(((a, b) => {
          if (b.fecha_final > a.fecha_final) {
            return 1
          } if (b.fecha_final < a.fecha_final) {
            return -1
          }
          return 0
        }))
      })},1000) 
    
  }

  select(exp: Experiencia) {
    this.questionsValues$ = exp

    this.useSelect = !this.useSelect

    setTimeout(() => {
      this.useSelect = !this.useSelect
    }, 500)

  }
  newExp(exp: Experiencia) {
    exp.persona_id = 6;
    this.expService.newExp(exp)
      .subscribe((exp: Experiencia) => {
        this.exps.push(exp)
      })
      setTimeout(()=> {this.expService.obtenerExp().subscribe((res) => {
        this.exps = res.sort(((a, b) => {
          if (b.fecha_final > a.fecha_final) {
            return 1
          } if (b.fecha_final < a.fecha_final) {
            return -1
          }
          return 0
        }))
      })},1000) 
    
  }
  editExp(exp: Experiencia) {
    exp.persona_id = 6;
    this.expService.editarExp(exp)
      .subscribe()

      setTimeout(()=> {this.expService.obtenerExp().subscribe((res) => {
        this.exps = res.sort(((a, b) => {
          if (b.fecha_final > a.fecha_final) {
            return 1
          } if (b.fecha_final < a.fecha_final) {
            return -1
          }
          return 0
        }))
      })},1000) 
    
    
  }

}
