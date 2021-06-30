import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsFullComponent } from './film-details-full.component';

describe('FilmDetailsFullComponent', () => {
  let component: FilmDetailsFullComponent;
  let fixture: ComponentFixture<FilmDetailsFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmDetailsFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
