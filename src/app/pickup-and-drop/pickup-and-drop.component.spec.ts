import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupAndDropComponent } from './pickup-and-drop.component';

describe('PickupAndDropComponent', () => {
  let component: PickupAndDropComponent;
  let fixture: ComponentFixture<PickupAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupAndDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
