import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFormComponent } from './d-form.component';

describe('DFormComponent', () => {
  let component: DFormComponent;
  let fixture: ComponentFixture<DFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
