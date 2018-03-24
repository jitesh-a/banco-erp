import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponserviewComponent } from './sponserview.component';

describe('SponserviewComponent', () => {
  let component: SponserviewComponent;
  let fixture: ComponentFixture<SponserviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponserviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
