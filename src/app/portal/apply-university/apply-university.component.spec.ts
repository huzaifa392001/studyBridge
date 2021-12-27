import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyUniversityComponent } from './apply-university.component';

describe('ApplyUniversityComponent', () => {
  let component: ApplyUniversityComponent;
  let fixture: ComponentFixture<ApplyUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
