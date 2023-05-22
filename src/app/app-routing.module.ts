import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home.component";
import {LoginComponent} from "./guard/login/login.component";
import {ProductComponent} from "./admin/admin_temp/product/product.component";

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
