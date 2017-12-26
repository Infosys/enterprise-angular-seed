import { Component, OnInit } from '@angular/core';
import * as log from 'loglevel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    log.debug('debug');
    log.warn('warning!');
  }

}
