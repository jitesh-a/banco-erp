import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoEventComponent } from './banco-event.component';

describe('BancoEventComponent', () => {
  let component: BancoEventComponent;
  let fixture: ComponentFixture<BancoEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
