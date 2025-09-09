import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBGW } from './pbgw';

describe('PBGW', () => {
  let component: PBGW;
  let fixture: ComponentFixture<PBGW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PBGW]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PBGW);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
