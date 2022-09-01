import { TestBed } from '@angular/core/testing';

import { ProyServService } from './proy-serv.service';

describe('ProyServService', () => {
  let service: ProyServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
