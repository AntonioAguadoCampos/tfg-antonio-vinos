import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SupermarketComponent } from './components/supermarket/supermarket.component';
import { ResultsComponent } from './components/results/results.component';
import { FinalFormComponent } from './components/final-form/final-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'supermarket',
    component: SupermarketComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'final-form',
    component: FinalFormComponent
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
