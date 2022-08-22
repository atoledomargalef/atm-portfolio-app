import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabEditComponent } from './hab-edit.component';

describe('HabEditComponent', () => {
  let component: HabEditComponent;
  let fixture: ComponentFixture<HabEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
