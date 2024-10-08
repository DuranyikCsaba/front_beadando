import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Iphone16Component } from './iphone16/iphone16.component';
import { Iphone16plusComponent } from './iphone16plus/iphone16plus.component';
import { Iphone16proComponent } from './iphone16pro/iphone16pro.component';
import { Iphone16promaxComponent } from './iphone16promax/iphone16promax.component';
import { FooldalComponent } from './fooldal/fooldal.component';

@NgModule({
  declarations: [
    AppComponent,
    Iphone16Component,
    Iphone16plusComponent,
    Iphone16proComponent,
    Iphone16promaxComponent,
    FooldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
