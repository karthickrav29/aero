import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {
    path: "flight",
    component: FlightsComponent
  },
  // {
  //   path: "dashboard",
  //   component: DashboardComponent
  // },
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
