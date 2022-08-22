import { TestBed } from '@angular/core/testing';

import { DatosFormacionService } from './datos-formacion.service';

describe('DatosFormacionService', () => {
  let service: DatosFormacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosFormacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
