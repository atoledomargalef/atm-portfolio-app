import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHabUniComponent } from './new-hab-uni.component';

describe('NewHabUniComponent', () => {
  let component: NewHabUniComponent;
  let fixture: ComponentFixture<NewHabUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHabUniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHabUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
