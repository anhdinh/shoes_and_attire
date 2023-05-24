import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel, ProductResponse} from "../../services/model/ProductModel";
import {delay, timeout} from "rxjs";

@Component({
  selector: 'app-product-list-prototype2',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  length = 0;
  productsPerPage:ProductModel[] =[];
  pageSize = 8;
  pagesNumber:number[] = [];
  currentPage = 1;
  isLoadingData = true;

  constructor(private productService:ProductService) {
  }
  ngOnInit (): void {
    this.getProducts(this.currentPage,this.pageSize);
  }

  getProducts(page:number,pageSize:number){
    this.productService.getProducts(page,pageSize).pipe(delay(200)).subscribe(productResponse=>{
      this.handleProductList(productResponse);
    })
  }

  handleProductList(productRes:ProductResponse){
    this.length=productRes.total;
    this.productsPerPage = productRes.products;
    this.isLoadingData=false;
    this.pagesNumber = Array.from(Array(Math.ceil(this.length/this.pageSize)).keys()).map(x => x + 1);
  }

  getProductByPageNumber(page: number) {
    this.isLoadingData=true;
    this.currentPage=page;
    this.getProducts(this.currentPage,this.pageSize);
  }
}
