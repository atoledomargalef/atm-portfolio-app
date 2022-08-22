import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerComponent } from './edit-per.component';

describe('EditPerComponent', () => {
  let component: EditPerComponent;
  let fixture: ComponentFixture<EditPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
