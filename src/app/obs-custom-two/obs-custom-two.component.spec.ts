import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsCustomTwoComponent } from './obs-custom-two.component';

describe('ObsCustomTwoComponent', () => {
  let component: ObsCustomTwoComponent;
  let fixture: ComponentFixture<ObsCustomTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsCustomTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsCustomTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
