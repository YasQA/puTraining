import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  filmId: number;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filmId = params.get('id') as unknown as number;
      this.filmService.setCurrentFilmId(this.filmId);
    });
  }

  navigateToShortDetails() {
    this.router.navigate(['short'], { relativeTo: this.route });
  }

  navigateToFullDetails() {
    this.router.navigate(['full'], { relativeTo: this.route });
  }

}
