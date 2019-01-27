import { Component } from '@angular/core';
import { EmailService } from './email.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'app';

  private service;
  public names:string[][];

  private data;

  constructor(service:EmailService){
    this.service=service;
  }

  buttonClicked(){

   // this.names= this.service.getData();
    console.log(this.service.getData());
  }
}
