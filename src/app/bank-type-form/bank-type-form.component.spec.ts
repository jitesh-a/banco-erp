import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTypeFormComponent } from './bank-type-form.component';

describe('BankTypeFormComponent', () => {
  let component: BankTypeFormComponent;
  let fixture: ComponentFixture<BankTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
