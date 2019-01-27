import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class EmailService {

  // uri = 'http://localhost:3000';

  uri = 'https://jsonplaceholder.typicode.com/posts';

  private http;
  constructor(http: HttpClient) {
    this.http = http;

  }
  getData() {
    //return [["srikanth","satish"],["Cyient","teraData"]];
    return this.http.get(this.uri).map((response) => {
      return response.json
    });
  }
}
