import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footar } from './footar';

describe('Footar', () => {
  let component: Footar;
  let fixture: ComponentFixture<Footar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footar],
    }).compileComponents();

    fixture = TestBed.createComponent(Footar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
