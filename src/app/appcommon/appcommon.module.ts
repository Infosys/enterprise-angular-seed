import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyModule, BusyConfig, BUSY_CONFIG_DEFAULTS } from 'tixif-ngx-busy';

export const busyConfig = BUSY_CONFIG_DEFAULTS;

@NgModule({
  imports: [
    CommonModule,
    BusyModule.forRoot(busyConfig)
  ],
  declarations: [],
  exports: [ BusyModule ]
})
export class AppcommonModule { }
