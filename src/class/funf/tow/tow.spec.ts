import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOW } from './tow';

describe('TOW', () => {
  let component: TOW;
  let fixture: ComponentFixture<TOW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TOW]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TOW);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
