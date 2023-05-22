import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel, ProductResponse} from "./model/ProductModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private  url ='https://dummyjson.com/products';
  constructor(private http: HttpClient) { }


  getProducts(page:number,pageSize:number): Observable<ProductResponse> {
    const limit = pageSize;
    const skip = (page-1)*pageSize;
    const url =  this.url+"?limit="+limit +"&skip="+skip;
    return this.http.get<ProductResponse>(url);
  }

}
