import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyItemComponent } from './proy-item.component';

describe('ProyItemComponent', () => {
  let component: ProyItemComponent;
  let fixture: ComponentFixture<ProyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
