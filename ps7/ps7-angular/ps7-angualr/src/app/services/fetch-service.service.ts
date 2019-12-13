import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() { }

  fetch2(endpoint : string, options? : any) {
    return fetch(endpoint, options)
  }
}
