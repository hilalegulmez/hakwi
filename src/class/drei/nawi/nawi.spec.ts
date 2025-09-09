import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAWI } from './nawi';

describe('NAWI', () => {
  let component: NAWI;
  let fixture: ComponentFixture<NAWI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NAWI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NAWI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
