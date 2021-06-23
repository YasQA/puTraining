import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FilmService } from "./services/films.service";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "./main/filter";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

