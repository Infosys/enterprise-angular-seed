import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoLandingComponent } from './components/demo-landing/demo-landing.component';
import { JsonFormDemoModule } from '../demo/json-form-demo/json-form-demo.module';

@NgModule({
  imports: [CommonModule, DemoRoutingModule, JsonFormDemoModule],
  declarations: [DemoLandingComponent]
})
export class DemoModule {}
