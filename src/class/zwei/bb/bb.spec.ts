import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BB } from './bb';

describe('BB', () => {
  let component: BB;
  let fixture: ComponentFixture<BB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
