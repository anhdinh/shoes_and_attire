import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ProductComponent} from "./admin_temp/product/product.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
