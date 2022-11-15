import {
  Injectable
} from "@angular/core";
import {
  UntypedFormControl,
  UntypedFormGroup,
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
        group[question.key] = new UntypedFormControl('', [Validators.required, Validators.minLength(question.minLength), Validators.maxLength(question.maxLength)]);
      } else {
        group[question.key] = new UntypedFormControl('');
      }

    });
    return new UntypedFormGroup(group);

  }



}