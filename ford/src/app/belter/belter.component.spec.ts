import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelterComponent } from './belter.component';

describe('BelterComponent', () => {
  let component: BelterComponent;
  let fixture: ComponentFixture<BelterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelterComponent]
    });
    fixture = TestBed.createComponent(BelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
