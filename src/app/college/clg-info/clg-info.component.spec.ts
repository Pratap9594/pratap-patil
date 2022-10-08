import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgInfoComponent } from './clg-info.component';

describe('ClgInfoComponent', () => {
  let component: ClgInfoComponent;
  let fixture: ComponentFixture<ClgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClgInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
