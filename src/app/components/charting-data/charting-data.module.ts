import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartingDataComponent } from './charting-data.component';
import {ChartModule} from "primeng/chart";



@NgModule({
  declarations: [
    ChartingDataComponent
  ],
  exports: [
    ChartingDataComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class ChartingDataModule { }
