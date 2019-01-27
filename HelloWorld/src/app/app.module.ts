import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { EmailService } from './email.service';
import { HttpModule} from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmailService,HttpModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
