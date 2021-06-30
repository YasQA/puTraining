import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmDetailsFullComponent } from "./film-details-full/film-details-full.component";
import { FilmDetailsShortComponent } from "./film-details-short/film-details-short.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'films/:id',
    component: FilmDetailsComponent,
    children: [
      { path: '', redirectTo: 'short', pathMatch: 'full' },
      { path: 'short', component: FilmDetailsShortComponent },
      { path: 'full', component: FilmDetailsFullComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
