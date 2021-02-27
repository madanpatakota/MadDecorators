import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsCustomOneComponent } from './obs-custom-one.component';

describe('ObsCustomOneComponent', () => {
  let component: ObsCustomOneComponent;
  let fixture: ComponentFixture<ObsCustomOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsCustomOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsCustomOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
