import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IWS } from './iws';

describe('IWS', () => {
  let component: IWS;
  let fixture: ComponentFixture<IWS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IWS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IWS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
