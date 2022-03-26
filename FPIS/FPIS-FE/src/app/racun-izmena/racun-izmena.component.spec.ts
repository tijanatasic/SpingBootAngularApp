import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunIzmenaComponent } from './racun-izmena.component';

describe('RacunIzmenaComponent', () => {
  let component: RacunIzmenaComponent;
  let fixture: ComponentFixture<RacunIzmenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacunIzmenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
