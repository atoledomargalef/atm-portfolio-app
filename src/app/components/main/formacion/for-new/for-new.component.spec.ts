import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNewComponent } from './for-new.component';

describe('ForNewComponent', () => {
  let component: ForNewComponent;
  let fixture: ComponentFixture<ForNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
