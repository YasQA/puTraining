import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: Film;
  filmId: number;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filmId = params.get('id') as unknown as number;
    });
    this.filmService.findById(this.filmId)
      .then(film => this.film = (film as Film));
  }

}
