import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxIndexedDBModule} from "ngx-indexed-db";
import {dbConfig} from "./configs/local-data-configs";
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { PriceAfterSalePipe } from './pipes/price-after-sale.pipe';
import {NavBarComponent} from "./index/nav-bar/nav-bar.component";
import {HomeComponent} from "./index/pages/home-page/home.component";
import {SlidesComponent} from "./index/slides/slides.component";
import {LoginComponent} from "./guard/login/login.component";
import {ProductListComponent} from "./index/pages/sub-pages/product-list/product-list.component";
import {ProductDetailComponent} from "./index/pages/product-detail/product-detail.component";
import {MainContainerComponent} from "./index/main-container.component";
import {ProductItemComponent} from "./index/pages/sub-pages/product-list/product-item/product-item.component";
import {FooterComponent} from "./index/footer/footer.component";
import { RattingComponent } from './index/pages/components/ratting/ratting.component';
import {SalePercentagePrecisionPipe} from './pipes/sale-percentage-pecision.pipe';
import {NgOptimizedImage} from "@angular/common";
import { CartComponent } from './index/pages/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SlidesComponent,
    LoginComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemComponent,
    PriceAfterSalePipe,
    ProductDetailComponent,
    MainContainerComponent,
    RattingComponent,
    SalePercentagePrecisionPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
