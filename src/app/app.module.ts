import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { FlightsComponent } from './flights/flights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    // DatePipe
  ],
  providers: [
    ApiService,
    DatePipe,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
