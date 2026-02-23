import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Declaraciones } from './declaraciones';

describe('Declaraciones', () => {
  let component: Declaraciones;
  let fixture: ComponentFixture<Declaraciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Declaraciones],
    }).compileComponents();

    fixture = TestBed.createComponent(Declaraciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
