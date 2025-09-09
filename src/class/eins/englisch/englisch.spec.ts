import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Englisch } from './englisch';

describe('Englisch', () => {
  let component: Englisch;
  let fixture: ComponentFixture<Englisch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Englisch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Englisch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
