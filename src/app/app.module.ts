import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home.component';
import { SlidesComponent } from './pages/slides/slides.component';
import { LoginComponent } from './guard/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxIndexedDBModule} from "ngx-indexed-db";
import {dbConfig} from "./configs/local-data-configs";
import { FooterComponent } from './pages/footer/footer.component';
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { PriceAfterSalePipe } from './pipes/price-after-sale.pipe';
import {SingleProductComponent} from "./pages/product-list/single-product/single-product.component";
import {ProductListComponent} from "./pages/product-list/product-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SlidesComponent,
    LoginComponent,
    FooterComponent,
    ProductListComponent,
    SingleProductComponent,
    PriceAfterSalePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig),

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
