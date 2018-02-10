import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcellentPerformanceComponent } from './excellent-performance.component';

describe('ExcellentPerformanceComponent', () => {
  let component: ExcellentPerformanceComponent;
  let fixture: ComponentFixture<ExcellentPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcellentPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcellentPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
