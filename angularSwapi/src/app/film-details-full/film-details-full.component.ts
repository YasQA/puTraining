import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-details-full',
  templateUrl: './film-details-full.component.html',
  styleUrls: ['./film-details-full.component.css']
})
export class FilmDetailsFullComponent implements OnInit {

  film: Film;
  filmId: number;

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filmService.getCurrentFilmId().then(id => {
      this.filmId = id as number;
      this.filmService.findById(this.filmId)
        .then(film => {
          this.film = (film as Film);
        })
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
