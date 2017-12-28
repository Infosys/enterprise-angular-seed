import { JsonServerService } from './services/json-server.service';
import { AppcommonModule } from './../appcommon/appcommon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AppcommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [
    JsonServerService
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
