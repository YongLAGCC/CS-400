import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { ContactsComponent } from './contacts/contacts.component';
// import {HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ EmployeeService],
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
