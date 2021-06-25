import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FilmService } from "./services/films.service";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "./main/filter";
import { FormsModule } from "@angular/forms";
import { FilmDetailsComponent } from './film-details/film-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterPipe,
    FilmDetailsComponent,
    AppHeaderComponent
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

