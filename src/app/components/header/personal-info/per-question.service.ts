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
export class PerQuestionService {

    getQuestions() {

        const questions: QuestionBase<any>[] = [

         
            new TextBoxQuestion({
                key: 'nombre',
                label: 'Nombre',
                placeholder: '',
                required: false,
                order: 1
              }),
              new TextareaQuestion({
                key: 'bio_about',
                label: 'Bio',
                type: 'text',
                required:false,
                minLength:10,
                order: 10
              }),
              new TextBoxQuestion({
                key: 'apellido',
                label: 'Apellido',
                type: 'text',
                required:false,
                order: 2
              }),
              new TextBoxQuestion({
                key: 'dni',
                label: 'DNI',
                type: 'text',
                required:false,
                order: 3
              }),
              new TextBoxQuestion({
                key: 'fecha_nac',
                label: 'DNI',
                type: 'date',
                required:false,
                order: 4
              }),
              new TextBoxQuestion({
                key: 'lugar_act',
                label: 'Ciudad actual',
                type: 'text',
                required:false,
                order: 5
              }),
              new TextBoxQuestion({
                key: 'direccion_act',
                label: 'Dirección',
                type: 'text',
                required:false,
                order: 6
              }),
              new TextBoxQuestion({
                key: 'telefono_cel',
                label: 'Teléfono',
                type: 'text',
                required:false,
                order: 7
              }),
              new TextBoxQuestion({
                key: 'email',
                label: 'Email',
                type: 'text',
                required:false,
                order: 8
              }),
              new TextBoxQuestion({
                key: 'profesion',
                label: 'Profesión',
                type: 'text',
                required:false,
                order: 9
              })

        ];

        return of(questions.sort((a, b) => a.order- b.order));

    }



}