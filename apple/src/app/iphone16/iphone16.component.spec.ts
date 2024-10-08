import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone16Component } from './iphone16.component';

describe('Iphone16Component', () => {
  let component: Iphone16Component;
  let fixture: ComponentFixture<Iphone16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Iphone16Component]
    });
    fixture = TestBed.createComponent(Iphone16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
