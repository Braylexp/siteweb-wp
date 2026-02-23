import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpinionComunicacion } from './opinion-comunicacion';

describe('OpinionComunicacion', () => {
  let component: OpinionComunicacion;
  let fixture: ComponentFixture<OpinionComunicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionComunicacion],
    }).compileComponents();

    fixture = TestBed.createComponent(OpinionComunicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
