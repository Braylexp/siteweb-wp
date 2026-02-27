import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Derechos } from './derechos';

describe('Derechos', () => {
  let component: Derechos;
  let fixture: ComponentFixture<Derechos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Derechos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Derechos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
