import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMMA } from './kmma';

describe('KMMA', () => {
  let component: KMMA;
  let fixture: ComponentFixture<KMMA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KMMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KMMA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
