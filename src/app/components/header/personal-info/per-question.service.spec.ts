import { TestBed } from '@angular/core/testing';

import { PerQuestionService } from './per-question.service';

describe('PerQuestionService', () => {
  let service: PerQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
