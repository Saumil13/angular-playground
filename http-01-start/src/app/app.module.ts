import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthIntercreptor } from './auth-intercreptor.service';
import { LoggingIntercreptorService } from './logging-itercreptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthIntercreptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingIntercreptorService, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
