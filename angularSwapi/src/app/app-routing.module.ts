import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { AppHeaderComponent } from './app-header/app-header.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'app-header', component: AppHeaderComponent },
  { path: 'films/:id', component: FilmDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
