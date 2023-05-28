import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel, ProductResponse} from "./model/ProductModel";
import {Observable} from "rxjs";
import {APIConfig} from "../configs/http_config";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "";
  constructor(private http: HttpClient) {
    this.url = APIConfig.SERVER_API_URL+"product";
  }

  getProducts(page:number,pageSize:number): Observable<ProductResponse> {
    const productsUrl = new URL(this.url);
    productsUrl.searchParams.append('page',String(page));
    productsUrl.searchParams.append('pageSize',String(pageSize));
    return this.http.get<ProductResponse>(productsUrl.href,{headers:APIConfig.getHeader()});
  }

  createProduct(productModel:any):Observable<ProductModel>{
    return this.http.post<any>(this.url,productModel);
  }



}
