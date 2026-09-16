import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Protfolio } from './protfolio';

describe('Protfolio', () => {
  let component: Protfolio;
  let fixture: ComponentFixture<Protfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protfolio],
    }).compileComponents();

    fixture = TestBed.createComponent(Protfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
