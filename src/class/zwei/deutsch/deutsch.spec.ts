import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deutsch } from './deutsch';

describe('Deutsch', () => {
  let component: Deutsch;
  let fixture: ComponentFixture<Deutsch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deutsch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deutsch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
