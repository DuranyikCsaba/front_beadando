import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { Iphone16Component } from './iphone16/iphone16.component';
import { Iphone16plusComponent } from './iphone16plus/iphone16plus.component';
import { Iphone16proComponent } from './iphone16pro/iphone16pro.component';
import { Iphone16promaxComponent } from './iphone16promax/iphone16promax.component';


const routes: Routes = [
  {path: 'iPhone16', component:Iphone16Component},
  {path: 'iPhone16plus', component:Iphone16plusComponent},
  {path: 'iPhone16pro', component:Iphone16proComponent},
  {path: 'iPhone16promax', component:Iphone16promaxComponent},
  {path: 'fooldal', component:FooldalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
