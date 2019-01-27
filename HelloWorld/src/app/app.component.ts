import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'app';

  private service;
  public names:any[];

  private data;

  constructor(service:EmailService){
    this.service=service;
  }
  ngOnInit(){
    this.names=this.service.getData().subscribe(resp=>{
      this.names=resp;
      console.log('s',this.names)
    });

  }

  buttonClicked(){

   // this.names=this.service.getData().subscribe(response=>{
     // this.names=response[0];
    console.log(this.names);
    
  

    
  
  } 
  
}
