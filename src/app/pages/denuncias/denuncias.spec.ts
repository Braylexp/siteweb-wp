import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Denuncias } from './denuncias';

describe('Denuncias', () => {
  let component: Denuncias;
  let fixture: ComponentFixture<Denuncias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Denuncias],
    }).compileComponents();

    fixture = TestBed.createComponent(Denuncias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
