import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyModule } from 'tixif-ngx-busy';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [ BusyModule, NgxPermissionsModule ]
})
export class AppcommonModule { }
