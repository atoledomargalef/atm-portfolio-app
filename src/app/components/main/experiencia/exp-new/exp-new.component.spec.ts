import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpNewComponent } from './exp-new.component';

describe('ExpNewComponent', () => {
  let component: ExpNewComponent;
  let fixture: ComponentFixture<ExpNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
