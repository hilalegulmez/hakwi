import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recht } from './recht';

describe('Recht', () => {
  let component: Recht;
  let fixture: ComponentFixture<Recht>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recht]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recht);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
