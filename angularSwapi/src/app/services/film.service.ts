import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../model';

@Injectable()
export class FilmService {
  private url = 'https://swapi.dev/api/films/';
  starsMap: Map<string, boolean> = new Map<string, boolean>();

  constructor(private http: HttpClient) { }

  findAll() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then(response => response.json())
        .then(details => {
          let films = details.results;
          resolve(films);
        })
    });
  }

  findById(id: number) {
    return new Promise((resolve, reject) => {
      this.findAll().then(result => result as Film[]).then(films => resolve(films[id] ));
    })
  }

  changeStarToggle(title: string) {
    this.starsMap.set(title, !this.starsMap.get(title));
  }
}
