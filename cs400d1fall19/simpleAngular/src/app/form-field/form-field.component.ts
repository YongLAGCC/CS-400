import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  boxText: string = 'hey now';
  reversedText: string;

  constructor() { }

  ngOnInit() {
  }

  reverseIt() {
    this.reversedText =
      this.boxText.split('').reverse().join('');
  }
}
