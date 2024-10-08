import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KulsoComponent } from './kulso/kulso.component';
import { BelterComponent } from './belter/belter.component';
import { MotorComponent } from './motor/motor.component';

@NgModule({
  declarations: [
    AppComponent,
    KulsoComponent,
    BelterComponent,
    MotorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
