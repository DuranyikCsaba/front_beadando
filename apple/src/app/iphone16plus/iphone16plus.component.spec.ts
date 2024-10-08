import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone16plusComponent } from './iphone16plus.component';

describe('Iphone16plusComponent', () => {
  let component: Iphone16plusComponent;
  let fixture: ComponentFixture<Iphone16plusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Iphone16plusComponent]
    });
    fixture = TestBed.createComponent(Iphone16plusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
