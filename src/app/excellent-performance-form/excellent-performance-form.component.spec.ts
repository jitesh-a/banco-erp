import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcellentPerformanceFormComponent } from './excellent-performance-form.component';

describe('ExcellentPerformanceFormComponent', () => {
  let component: ExcellentPerformanceFormComponent;
  let fixture: ComponentFixture<ExcellentPerformanceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcellentPerformanceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcellentPerformanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
