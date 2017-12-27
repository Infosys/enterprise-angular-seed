import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BusyModule, BUSY_CONFIG_DEFAULTS } from 'tixif-ngx-busy';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { AppcommonModule } from './appcommon/appcommon.module';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false}),
    BusyModule.forRoot(BUSY_CONFIG_DEFAULTS),
    NgxPermissionsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
