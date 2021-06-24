import { Component, OnInit } from '@angular/core';
import { Film } from "../model";
import { FilmService } from "../services/films.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchTerm = "";
  films: Film[] = [];
  starChecked = '../../assets/images/ystar.png'
  starUnchecked = '../../assets/images/wstar.png'
  starsMap: Map<string, boolean> = new Map<string, boolean>();

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.findAll().then(data => {
      this.films = data as Film[];
      for (let film of this.films) {
        this.starsMap.set(film.title, false);
      }
    })
  }

  changeStarToggle(title: string) {
    if (this.starsMap.get(title)) {
      this.starsMap.set(title, false);
    } else {
      this.starsMap.set(title, true);
    }
  }

}
