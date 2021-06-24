import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilmService {
  private url = 'https://swapi.dev/api/films/';

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

}
