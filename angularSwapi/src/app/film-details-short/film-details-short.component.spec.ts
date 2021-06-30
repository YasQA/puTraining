import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsShortComponent } from './film-details-short.component';

describe('FilmDetailsShortComponent', () => {
  let component: FilmDetailsShortComponent;
  let fixture: ComponentFixture<FilmDetailsShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDetailsShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
