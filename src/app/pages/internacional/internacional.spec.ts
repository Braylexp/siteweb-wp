import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Internacional } from './internacional';

describe('Internacional', () => {
  let component: Internacional;
  let fixture: ComponentFixture<Internacional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Internacional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Internacional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
