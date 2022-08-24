import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForItemComponent } from './for-item.component';

describe('ForItemComponent', () => {
  let component: ForItemComponent;
  let fixture: ComponentFixture<ForItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
