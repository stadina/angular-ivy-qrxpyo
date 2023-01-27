import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CardComponent } from './card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CardModule],
  declarations: [ AppComponent, HelloComponent, CardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
