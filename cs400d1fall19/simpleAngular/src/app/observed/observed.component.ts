import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {from} from 'rxjs/internal/observable/from';


@Component({
  selector: 'app-observed',
  templateUrl: './observed.component.html',
  styleUrls: ['./observed.component.css']
})
export class ObservedComponent implements OnInit {

  observableNum: Observable<number>;
  observer: any;
  observed: number;

  constructor() {
    this.observableNum = of(1, 2, 3);

    this.observer = {
      next: (value) => {
        console.log(`Got ${value}`);
        this.observed = value;
      },
      error: (err) => console.log(`${err}`),
      complete: () => console.log(`Completed`)

    };
    console.log(`In constructor of observed`);
    this.observableNum.subscribe(this.observer);


  }

  ngOnInit() {
  }

}
