import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorAndGuestComponent } from './sponsor-and-guest.component';

describe('SponsorAndGuestComponent', () => {
  let component: SponsorAndGuestComponent;
  let fixture: ComponentFixture<SponsorAndGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorAndGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorAndGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
