import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserInfoService {
  constructor(private http: HttpClient) {}

  public getUserInfo(accessToken): Observable<any> {
    return this.http.post(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`, '');
  }
}
