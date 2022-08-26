import {
  Injectable
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import {
  QuestionBase
} from "./question-base";

@Injectable()
export class QuestionControlService {

  constructor() {}

  toFormGroup(questions: QuestionBase < string > []) {

    const group: any = {};

    questions.forEach(question => {

      if (question.required) {
        group[question.key] = new FormControl('', [Validators.required, Validators.minLength(question.minLength)]);
      } else {
        group[question.key] = new FormControl('');
      }

    });
    return new FormGroup(group);

  }



}