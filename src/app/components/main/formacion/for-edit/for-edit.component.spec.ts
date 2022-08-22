import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEditComponent } from './for-edit.component';

describe('ForEditComponent', () => {
  let component: ForEditComponent;
  let fixture: ComponentFixture<ForEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
