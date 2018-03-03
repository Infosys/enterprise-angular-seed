import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../appcommon/services/app.service';
import { UserInfoService } from '../services/userinfo.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OAuthComponent implements OnInit {
  userInfo: any;
  accessToken: string;

  constructor(
    private appState: AppState,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private service: UserInfoService
  ) {
    this.activeRoute.params.subscribe(params => {
      const url = window.location.href;
      if (url.split('#').length > 1) {
        const responseParameters = url.split('#')[1].split('&');
        const parsedResponse = {};
        for (let i = 0; i < responseParameters.length; i++) {
          parsedResponse[responseParameters[i].split('=')[0]] = responseParameters[i].split('=')[1];
        }
        if (parsedResponse['access_token'] !== undefined && parsedResponse['access_token'] !== null) {
          this.appState.set('accessToken', parsedResponse['access_token']);
          this.router.navigate(['oauth']);
        }
      }
    });
  }

  ngOnInit() {
    this.accessToken = this.appState.get('accessToken');
    if (this.accessToken) {
      this.service.getUserInfo(this.accessToken).subscribe(data => {
        this.userInfo = data;
      });
    } else {
      this.router.navigate(['home']);
    }
  }
}
