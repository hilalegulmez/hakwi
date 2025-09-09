import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BW } from './bw';

describe('BW', () => {
  let component: BW;
  let fixture: ComponentFixture<BW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BW]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BW);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
