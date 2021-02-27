import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsCustomProductComponent } from './obs-custom-product.component';

describe('ObsCustomProductComponent', () => {
  let component: ObsCustomProductComponent;
  let fixture: ComponentFixture<ObsCustomProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsCustomProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsCustomProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
