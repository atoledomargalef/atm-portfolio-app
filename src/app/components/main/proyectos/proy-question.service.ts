import { Injectable } from '@angular/core';

import { QuestionBase } from 'src/app/components/forms/question-base';
import { QuestionControlService } from 'src/app/components/forms/question-control.service';
import { DateQuestion } from 'src/app/components/forms/question-date';
import { TextBoxQuestion } from 'src/app/components/forms/question-textbox';
import { TextareaQuestion } from 'src/app/components/forms/question-textarea';
import { FileQuestion } from '../../forms/question-file';
import { of } from 'rxjs';
import { HiddenQuestion } from 'src/app/components/forms/question-hidden';
import { DropdownQuestion } from 'src/app/components/forms/question-dropdown';

@Injectable()
export class ProyQuestionService {

    getQuestions() {

        const questions: QuestionBase<any>[] = [

          new HiddenQuestion({
            key:'id',
            value:''
          }),
          new HiddenQuestion({
            key:'persona_id',
            value:'6'
          }),
            new TextBoxQuestion({
                key: 'titulo',
                label: 'Titulo',
                placeholder: 'Escribe aquí el Titulo del proyecto',
                required: true,
                
                maxLength:100,
                order: 1
              }),
              new TextareaQuestion({
                key: 'descrip_proj',
                label: 'Descripción',
                type: 'text',
                required:true,
                minLength:20,
                
                maxLength:100,
                order: 5
              }),
              new TextBoxQuestion({
                key: 'link_proj',
                label: 'Link al Proyecto',
                type: 'text',
                required:true,
                
                maxLength:200,
                order: 3
              }),
              new TextBoxQuestion({
                key: 'habilidades',
                label: 'Habilidades',
                type: 'text',
                required:true,
                
                maxLength:100,
                order: 2
              }),
              // new FileQuestion({
              //   key: 'img_proyecto',
              //   label: 'Imagen del Proyecto',
              //   required:true,
              //   order: 4
              // }),
              new HiddenQuestion({
                key: 'persona_id',
                value: '6',
                order: 6,
              })

        ];

        return of(questions.sort((a, b) => a.order- b.order));

    }



}