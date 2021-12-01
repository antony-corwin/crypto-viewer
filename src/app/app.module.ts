import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from '@angular/common/http';
import {ChartingDataModule} from "./components/charting-data/charting-data.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AutoCompleteModule,
        FormsModule,
        ButtonModule,
        ChartingDataModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
