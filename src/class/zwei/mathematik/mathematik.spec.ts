import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathematik } from './mathematik';

describe('Mathematik', () => {
  let component: Mathematik;
  let fixture: ComponentFixture<Mathematik>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mathematik]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mathematik);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
