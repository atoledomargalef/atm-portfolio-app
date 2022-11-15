import { Injectable } from '@angular/core';

import { QuestionBase } from 'src/app/components/forms/question-base';
import { QuestionControlService } from 'src/app/components/forms/question-control.service';
import { DateQuestion } from 'src/app/components/forms/question-date';
import { TextBoxQuestion } from 'src/app/components/forms/question-textbox';
import { TextareaQuestion } from 'src/app/components/forms/question-textarea';
import { of } from 'rxjs';
import { HiddenQuestion } from 'src/app/components/forms/question-hidden';
import { DropdownQuestion } from 'src/app/components/forms/question-dropdown';
import { HabilidadesComponent } from './habilidades.component';

@Injectable()
export class HabsQuestionService {



    getQuestions() {
      
        const questions: QuestionBase<any>[] = [


            new HiddenQuestion({
              key: 'id',
              value: ''
            }),

            new DropdownQuestion({
                key: 'habilidades',
                label: 'Habilidades',
                options: [ 
                    { key:'JAVA',value:'JAVA'},
                    { key:'JavasCript',value:'JavaScript'},
                    { key:'HTML',value:'HTML'},
                    { key:'CSS',value:'CSS'},
                    { key:'MySQL',value:'MySQL'},
                    { key:'Less',value:'Less'},
                    { key:'WordPress',value:'WordPress'},
                    { key:'React',value:'React'},
                    { key:'Angular',value:'Angular'},
                    { key:'Photoshop',value:'Photoshop'},
                    { key:'Illustrator',value:'Illustrator'},
                ],
                required: true,
                
                maxLength:100,
                order: 1,
                value:''
              }),
              new TextBoxQuestion({
                key: 'descripcion',
                label: 'Descripcion',
                type: 'text',
                required:true,
                maxLength:100,
                order: 3,
                value: ''
              }),
              new TextBoxQuestion({
                key: 'porcentaje',
                label: 'Porcentaje',
                type: 'number',
                required:true,
                
                maxLength:100,
                order: 2,
                value:''
              })
            

        ];

        return of(questions.sort((a, b) => a.order- b.order));

    }



}