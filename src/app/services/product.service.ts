import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel, ProductResponse} from "./model/ProductModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/product";
  constructor(private http: HttpClient) { }

  getProducts(page:number,pageSize:number): Observable<ProductResponse> {
    const productsUrl = new URL(this.url);
    productsUrl.searchParams.append('page',String(page));
    productsUrl.searchParams.append('pageSize',String(pageSize));
    return this.http.get<ProductResponse>(productsUrl.href);
  }

  createProduct(productModel:any):Observable<ProductModel>{
    return this.http.post<any>(this.url,productModel);
  }



}
