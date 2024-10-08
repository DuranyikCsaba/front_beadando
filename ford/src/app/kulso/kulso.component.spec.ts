import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KulsoComponent } from './kulso.component';

describe('KulsoComponent', () => {
  let component: KulsoComponent;
  let fixture: ComponentFixture<KulsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KulsoComponent]
    });
    fixture = TestBed.createComponent(KulsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
