import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdaIzmenaComponent } from './potvrda-izmena.component';

describe('PotvrdaIzmenaComponent', () => {
  let component: PotvrdaIzmenaComponent;
  let fixture: ComponentFixture<PotvrdaIzmenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotvrdaIzmenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdaIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
