import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchServiceService } from '../services/fetch-service.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Output() newData = new EventEmitter();
  constructor(public fetchService : FetchServiceService) { }

  ngOnInit() {
  }


  public currentText = '';
  async submit() {

    if (this.currentText.length < 2) {
      // bad

      alert("hey!")
    } else {

      const response = await this.fetchService.fetch2("http://localhost:3000")
      const json = await response.json()
      this.newData.emit(json)

    }
  }

}
