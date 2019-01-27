import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseType } from '@angular/http';


@Injectable()
export class EmailService {

  uri = 'http://localhost:3000';

  private http;
  constructor(http: HttpClient) {
    this.http = http;

  }
    getData(){
      //return [["srikanth","satish"],["Cyient","teraData"]];
      return this.http.get(`${this.uri}`,{responseType: 'text'}).subscribe(responsedata=>console.log(responsedata));

    }
  
}
