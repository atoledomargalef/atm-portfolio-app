import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextBoxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { TextareaQuestion } from './question-textarea';

@Injectable()
export class QuestionService {

    getQuestions() {

        const questions: QuestionBase<string>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),
            new TextBoxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
              }),
              new TextBoxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required:true,
                order: 2
              }),
              new TextareaQuestion({
                key: 'email2',
                label: 'Email2',
                type: 'email',
                required:true,
                minLength:10,
                order: 4
              })

        ];

        return of(questions.sort((a, b) => a.order- b.order));

    }



}