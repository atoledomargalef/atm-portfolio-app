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
export class ExpQuestionService {

    getQuestions() {

        const questions: QuestionBase<any>[] = [

         
            new TextBoxQuestion({
                key: 'titulo',
                label: 'Titulo',
                placeholder: 'Escribe aquí el Titulo del proyecto',
                required: true,
                order: 1
              }),
              new TextareaQuestion({
                key: 'descrip_tareas',
                label: 'Descripcion de tareas',
                type: 'text',
                placeholder: "Describe las tareas que realizaste",
                required:true,
                minLength:20,
                order: 5
              }),
              new TextBoxQuestion({
                key: 'fecha_final',
                label: 'Hasta',
                type: 'date',
                required:true,
                order: 3
              }),
              new TextBoxQuestion({
                key: 'fecha_inicio',
                label: 'Desde',
                type: 'date',
                required:true,
                order: 2
              }),
              new TextBoxQuestion({
                key: 'refe',
                label: 'Referencia',
                type: 'text',
                required:false,
                order: 4
              }),
             

        ];

        return of(questions.sort((a, b) => a.order- b.order));

    }



}