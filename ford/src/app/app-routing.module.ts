import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KulsoComponent } from './kulso/kulso.component';
import { BelterComponent } from './belter/belter.component';
import { MotorComponent } from './motor/motor.component';

const routes: Routes = [
  {path:'kulso', component: KulsoComponent},
  {path: 'belter', component: BelterComponent},
  {path: 'motor', component: MotorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
