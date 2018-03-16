import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelPerformViewComponent } from './excel-perform-view.component';

describe('ExcelPerformViewComponent', () => {
  let component: ExcelPerformViewComponent;
  let fixture: ComponentFixture<ExcelPerformViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelPerformViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelPerformViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
