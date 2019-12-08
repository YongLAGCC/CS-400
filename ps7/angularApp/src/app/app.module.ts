import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// export interface Cat {
//   name: string;
// }

// @Injectable()
// export class CatService {
//   constructor(private httpClient: HttpClient) {}

//     getAllCats(): Observable<Cat[]> {
//       return this.httpClient.get<Cat[]>
//       ('http://localhost:3000/ps6/results');
//     }

// }

export class AppModule { }
