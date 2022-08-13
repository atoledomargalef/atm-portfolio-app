import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAComponent } from './boton-a.component';

describe('BotonAComponent', () => {
  let component: BotonAComponent;
  let fixture: ComponentFixture<BotonAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
