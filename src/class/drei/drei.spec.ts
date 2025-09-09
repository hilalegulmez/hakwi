import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drei } from './drei';

describe('Drei', () => {
  let component: Drei;
  let fixture: ComponentFixture<Drei>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drei]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drei);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
