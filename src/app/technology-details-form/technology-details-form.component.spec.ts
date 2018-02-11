import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDetailsFormComponent } from './technology-details-form.component';

describe('TechnologyDetailsFormComponent', () => {
  let component: TechnologyDetailsFormComponent;
  let fixture: ComponentFixture<TechnologyDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
