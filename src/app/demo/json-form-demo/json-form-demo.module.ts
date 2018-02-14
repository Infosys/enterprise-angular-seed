import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonSchemaFormModule } from 'angular2-json-schema-form';

import { JsonFormDemoRoutingModule } from './json-form-demo-routing.module';
import { JsonFormComponent } from './components/json-form/json-form.component';

@NgModule({
  imports: [CommonModule, JsonFormDemoRoutingModule, JsonSchemaFormModule],
  declarations: [JsonFormComponent]
})
export class JsonFormDemoModule {}
