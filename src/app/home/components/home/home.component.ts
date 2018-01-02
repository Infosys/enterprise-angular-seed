import { Subscription } from 'rxjs/Subscription';
import { Post } from './../../models/post';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as log from 'loglevel';
import { JsonServerService } from '../../services/json-server.service';
import { AppState } from '../../../appcommon/services/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public posts$: Subscription;
  public showBusy = true;
  private counterSub: Subscription;
  public counterValue: number;

  constructor(private service: JsonServerService, private appState: AppState) { }

  ngOnInit() {
    // this.showBusy = undefined;
    this.appState.counterVal.subscribe( data => {
      console.log('data', data);
      this.counterValue = data;
    });
  }

  ngAfterViewInit() {
    log.debug('debug');
    log.warn('warning!');
    //setTimeout( () => {
      this.showBusy = true;
      this.posts$ = this.service.getBEData().subscribe( posts => {
        log.debug(posts);
        this.showBusy = false;
      });
    //});
  }
  public toggle(): void {
    // this.showBusy = !this.showBusy;
    this.appState.incCounter();
  }
}
