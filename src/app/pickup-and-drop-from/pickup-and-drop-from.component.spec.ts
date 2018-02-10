import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupAndDropFromComponent } from './pickup-and-drop-from.component';

describe('PickupAndDropFromComponent', () => {
  let component: PickupAndDropFromComponent;
  let fixture: ComponentFixture<PickupAndDropFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupAndDropFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupAndDropFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
