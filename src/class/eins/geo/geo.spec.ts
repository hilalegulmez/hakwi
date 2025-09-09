import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GEO } from './geo';

describe('GEO', () => {
  let component: GEO;
  let fixture: ComponentFixture<GEO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GEO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GEO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
