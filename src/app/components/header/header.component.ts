import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { OAuth } from '../../appcommon/security';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['home'],
        items: [
          {
            label: 'New',
            items: [{ label: 'Project' }, { label: 'Other' }]
          },
          { label: 'Open', routerLink: ['pagename'] },
          {
            label: 'Google OAuth',
            command: event => {
              event.originalEvent.preventDefault();
              const oAuth = new OAuth({
                AUTH_URL: environment.AUTH_URL,
                CLIENT_ID: environment.OAUTH_CLIENT_ID,
                SCOPE: ['profile'],
                OAUTH_REDIRECT_URI: window.location.origin + '/oauth/'
              });
              oAuth.authenticate();
            }
          },
          { label: 'Quit', routerLink: ['pagename'] }
        ]
      },
      {
        label: 'Demo',
        routerLink: ['demo'],
        items: [
          {
            label: 'Chartist Charts',
            routerLink: ['demo/chartist']
          } /* ,
          { label: 'Json Form Demo', routerLink: ['demo/json-form'] } */
        ]
      }
    ];
  }
}
