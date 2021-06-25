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
      for (let i = 0; i < this.films.length; i++) {
        this.films[i].id = i;
      }
    })
    this.starsMap = this.filmService.starsMap;
  }

  changeStarToggle(title: string) {
    this.filmService.changeStarToggle(title);
  }

}
