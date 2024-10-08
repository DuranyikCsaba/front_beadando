import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone16promaxComponent } from './iphone16promax.component';

describe('Iphone16promaxComponent', () => {
  let component: Iphone16promaxComponent;
  let fixture: ComponentFixture<Iphone16promaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Iphone16promaxComponent]
    });
    fixture = TestBed.createComponent(Iphone16promaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
