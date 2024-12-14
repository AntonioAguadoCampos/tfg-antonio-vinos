import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ 
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "supermarket",
    loadChildren: () => import("./supermarket/supermarket.module").then(m => m.SupermarketModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
