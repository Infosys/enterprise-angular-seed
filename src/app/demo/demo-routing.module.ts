import { DemoLandingComponent } from './components/demo-landing/demo-landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DemoLandingComponent },
  { path: 'chartist', loadChildren: './chartist-demo/chartist-demo.module#ChartistDemoModule' }
  /* { path: 'json-form', loadChildren: './json-form-demo/json-form-demo.module#JsonFormDemoModule' } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
