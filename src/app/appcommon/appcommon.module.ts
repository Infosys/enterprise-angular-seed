import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { BusyDirective } from './directives/busy.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [ NgxPermissionsModule, BusyDirective],
  declarations: [ BusyDirective ]
})
export class AppcommonModule { }
