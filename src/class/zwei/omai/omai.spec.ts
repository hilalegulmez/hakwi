import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMAI } from './omai';

describe('OMAI', () => {
  let component: OMAI;
  let fixture: ComponentFixture<OMAI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OMAI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OMAI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
