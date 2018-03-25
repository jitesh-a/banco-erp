import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sponserviewComponent } from './sponserview.component';

describe('SponserviewComponent', () => {
  let component: sponserviewComponent;
  let fixture: ComponentFixture<sponserviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sponserviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sponserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
