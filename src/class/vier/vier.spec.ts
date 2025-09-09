import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vier } from './vier';

describe('Vier', () => {
  let component: Vier;
  let fixture: ComponentFixture<Vier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
