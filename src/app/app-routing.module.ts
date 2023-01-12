import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './home/home.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'api', component: ApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }