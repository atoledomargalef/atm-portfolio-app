import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseButtonBComponent } from './close-button-b.component';

describe('CloseButtonBComponent', () => {
  let component: CloseButtonBComponent;
  let fixture: ComponentFixture<CloseButtonBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseButtonBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseButtonBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
