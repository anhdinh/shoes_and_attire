import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./admin_temp/product/product.component";
import {AdminMainComponent} from "./admin-main.component";

const routes: Routes = [
    {
      path:"",
      component:AdminMainComponent,
      children:[
        {
          path:"product",
          component:ProductComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
