import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home.component';
import { SlidesComponent } from './pages/slides/slides.component';
import { LoginComponent } from './guard/login/login.component';
import {FormsModule} from "@angular/forms";
import {NgxIndexedDBModule} from "ngx-indexed-db";
import {dbConfig} from "./configs/local-data-configs";
import { ProductListPrototype1Component } from './pages/product-list-prototype1/product-list-prototype1.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProductListPrototype2Component } from './pages/product-list-prototype2/product-list-prototype2.component';
import { SingleProductComponent } from './pages/product-list-prototype2/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SlidesComponent,
    LoginComponent,
    ProductListPrototype1Component,
    FooterComponent,
    ProductListPrototype2Component,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
