import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpEditComponent } from './exp-edit.component';

describe('ExpEditComponent', () => {
  let component: ExpEditComponent;
  let fixture: ComponentFixture<ExpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
