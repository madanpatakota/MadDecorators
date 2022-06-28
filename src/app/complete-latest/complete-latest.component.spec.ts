import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteLatestComponent } from './complete-latest.component';

describe('CompleteLatestComponent', () => {
  let component: CompleteLatestComponent;
  let fixture: ComponentFixture<CompleteLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
