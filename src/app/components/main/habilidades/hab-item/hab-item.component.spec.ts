import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabItemComponent } from './hab-item.component';

describe('HabItemComponent', () => {
  let component: HabItemComponent;
  let fixture: ComponentFixture<HabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
