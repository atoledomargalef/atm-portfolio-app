import { Component } from '@angular/core';
import { QuestionService } from './components/forms/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers:[QuestionService]
})
export class AppComponent {
  title = 'atm-portfolio-app';
}
