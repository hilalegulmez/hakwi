import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WINF } from './winf';

describe('WINF', () => {
  let component: WINF;
  let fixture: ComponentFixture<WINF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WINF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WINF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
