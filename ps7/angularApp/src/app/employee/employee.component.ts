import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template:
  `
  <div *ngFor="let color of colors; index as i">
  <h2> {{color}}</h2>
  </div>
  <br>
  <h3> If course is ture, show: </h3>
  <h3 *ngIf="true">
  {{course}}</h3>`,

  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public colors = ['red', 'blue', 'green', 'yellow'];
  public course = 'CS400';
  constructor() { }

  ngOnInit() {
  }

}
