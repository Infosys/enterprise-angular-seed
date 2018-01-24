import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';

import { ChartistDemoRoutingModule } from './chartist-demo-routing.module';
import { BasicChartistComponent } from './components/basic-chartist/basic-chartist.component';

@NgModule({
  imports: [CommonModule, ChartistModule, ChartistDemoRoutingModule],
  declarations: [BasicChartistComponent]
})
export class ChartistDemoModule {}
