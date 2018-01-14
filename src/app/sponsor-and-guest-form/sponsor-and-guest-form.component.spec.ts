import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorAndGuestFormComponent } from './sponsor-and-guest-form.component';

describe('SponsorAndGuestFormComponent', () => {
  let component: SponsorAndGuestFormComponent;
  let fixture: ComponentFixture<SponsorAndGuestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorAndGuestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorAndGuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
