//run angular use -> ng serve
//localhost:3000
import { Component } from '@angular/core';
import { FetchServiceService } from './services/fetch-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  public displayData = []

  receiveData(data : any) {
    this.displayData = Object.entries(data)



    // Object.entries({a:3, b:4}) = [["a",3], []]
  }


}
