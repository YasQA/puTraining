import { Pipe,PipeTransform } from '@angular/core';
import { Film } from "../model";

@Pipe({
  name:'filter'
})

export class FilterPipe implements PipeTransform {

  transform(films: Film[], searchTerm: string) {
    if (searchTerm) {
      let newSearchTerm = searchTerm.toLowerCase();
      return films.filter(film => film.title.toLowerCase().indexOf(newSearchTerm) > -1);
    }
    return films;
  }
}
