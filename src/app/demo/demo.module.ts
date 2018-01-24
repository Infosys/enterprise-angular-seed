import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoLandingComponent } from './components/demo-landing/demo-landing.component';

@NgModule({
  imports: [CommonModule, DemoRoutingModule],
  declarations: [DemoLandingComponent]
})
export class DemoModule {}
