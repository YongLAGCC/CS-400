import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'employee-list',
  template: `
  <h2>employee Detail</h2>
  <ul *ngFor = "let employee of employees">
    <li>{{employee.name}} </li>
    </ul>`,
  styles: [] })

  export class EmployeeListComponent implements OnInit {
    public employees = [
      {id: 1, name: 'Andrew', age: 30},
      {id: 2, name: 'Brandon', age: 25},
      {id: 3, name: 'Chris', age: 26},
      {id: 4, name: 'Elena', age: 28},
      {id: 5, name: 'Felicia', age: 25}
        ];

    constructor() {}
    ngOnInit() {

    }
  }
