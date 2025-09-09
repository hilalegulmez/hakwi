import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funf } from './funf';

describe('Funf', () => {
  let component: Funf;
  let fixture: ComponentFixture<Funf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
