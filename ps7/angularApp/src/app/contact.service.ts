import { Injectable } from '@angular/core';
import {Contact } from './contact';
import { Http } from '@angular/Http';
import 'rxjs/add/operator/map';

@Injectable( )
  // {
//   providedIn: 'root'
// })
export class ContactService {

  constructor(private http: Http )  { }

  getContacts()
  {
    return this.http.get('http//localhost:3000/api/contacts')
      .map(res => res.json());
  }
}
