import { BasicChartistComponent } from './components/basic-chartist/basic-chartist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: BasicChartistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartistDemoRoutingModule {}
