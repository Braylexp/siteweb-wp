import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccionesUrgentes } from './acciones-urgentes';

describe('AccionesUrgentes', () => {
  let component: AccionesUrgentes;
  let fixture: ComponentFixture<AccionesUrgentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionesUrgentes],
    }).compileComponents();

    fixture = TestBed.createComponent(AccionesUrgentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
