import { AppcommonModule } from './../appcommon/appcommon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OAuthComponent } from './components/oauth.component';
import { UserInfoService } from './services/userinfo.service';

const routes: Routes = [{ path: '', component: OAuthComponent }];

@NgModule({
  imports: [CommonModule, AppcommonModule, RouterModule.forChild(routes)],
  providers: [UserInfoService],
  declarations: [OAuthComponent]
})
export class OAuthModule {}
