import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InsideComponentComponent } from './form-field/inside-component/inside-component.component';
import {FormsModule} from '@angular/forms';
import { ObservedComponent } from './observed/observed.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    InsideComponentComponent,
    ObservedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
