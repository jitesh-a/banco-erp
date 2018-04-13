import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBanksComponent } from './top-banks.component';

describe('TopBanksComponent', () => {
  let component: TopBanksComponent;
  let fixture: ComponentFixture<TopBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
