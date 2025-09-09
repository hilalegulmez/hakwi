import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNCO } from './unco';

describe('UNCO', () => {
  let component: UNCO;
  let fixture: ComponentFixture<UNCO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UNCO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UNCO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
