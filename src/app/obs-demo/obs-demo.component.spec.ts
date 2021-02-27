import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsDemoComponent } from './obs-demo.component';

describe('ObsDemoComponent', () => {
  let component: ObsDemoComponent;
  let fixture: ComponentFixture<ObsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
