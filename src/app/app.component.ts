import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { environment } from './../environments/environment';
import * as log from 'loglevel';
import { User } from './appcommon/models/user';
import { routerTransition } from './components/animations/router.animations';
import { UserInfoService } from './appcommon/services/user-info.service';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private permsService: NgxPermissionsService, private userService: UserInfoService) {}

  ngOnInit(): void {
    log.setLevel(environment.LOG_LEVEL);
    log.setDefaultLevel(environment.LOG_LEVEL);

    this.userService.getUserInfo().subscribe((user: User) => {
      user.permissions.forEach(perm => {
        this.permsService.addPermission(perm);
      });
    });
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
