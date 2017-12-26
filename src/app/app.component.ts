import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import * as log from 'loglevel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    log.setLevel(environment.LOG_LEVEL);
    log.setDefaultLevel(environment.LOG_LEVEL);
  }
}
