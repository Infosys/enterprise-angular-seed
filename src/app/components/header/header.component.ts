import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

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
