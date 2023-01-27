import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {ImageModule} from 'primeng/image';


import {DockModule} from 'primeng/dock';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CardComponent } from './card.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, CardModule, ImageModule, DockModule, DropdownModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

