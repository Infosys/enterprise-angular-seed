import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import 'rxjs/add/operator/delay';

@Injectable()
export class JsonServerService {

  constructor(private http: HttpClient) { }

  public getBEData(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts').delay(45000);
  }
}
