import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../app/login/login.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }
  getData() {
    return {
      // ...LoginInfo()
      user: 'veena',
      password: 'adminVeena'
    }
  }
  getAPIData() {
    return this.http.get(this.url);
  }
}
