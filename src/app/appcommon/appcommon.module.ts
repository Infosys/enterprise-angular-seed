import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';

import { BusyDirective } from './directives/busy.directive';

import { AppState } from './services/app.service';
import { UserInfoService } from './services/user-info.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ NgxPermissionsModule, BusyDirective ],
  declarations: [ BusyDirective ],
  providers: [
    AppState,
    UserInfoService
  ]
})
export class AppcommonModule { }
