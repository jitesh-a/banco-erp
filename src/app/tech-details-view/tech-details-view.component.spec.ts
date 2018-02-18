import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDetailsViewComponent } from './tech-details-view.component';

describe('TechDetailsViewComponent', () => {
  let component: TechDetailsViewComponent;
  let fixture: ComponentFixture<TechDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
