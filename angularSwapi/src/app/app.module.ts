import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FilmService } from "./services/film.service";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "./main/filter";
import { FormsModule } from "@angular/forms";
import { FilmDetailsComponent } from './film-details/film-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FilmDetailsFullComponent } from './film-details-full/film-details-full.component';
import { FilmDetailsShortComponent } from './film-details-short/film-details-short.component';
import { ToggleTextDirective } from './directives/toggle-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterPipe,
    FilmDetailsComponent,
    AppHeaderComponent,
    FilmDetailsFullComponent,
    FilmDetailsShortComponent,
    ToggleTextDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
