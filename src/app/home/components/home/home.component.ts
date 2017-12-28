import { Subscription } from 'rxjs/Subscription';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import * as log from 'loglevel';
import { JsonServerService } from '../../services/json-server.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts$: Subscription;
  constructor(private service: JsonServerService) { }

  ngOnInit() {
    log.debug('debug');
    log.warn('warning!');
    this.posts$ = this.service.getBEData().subscribe( posts => {
      log.debug(posts);
    });
  }
}
