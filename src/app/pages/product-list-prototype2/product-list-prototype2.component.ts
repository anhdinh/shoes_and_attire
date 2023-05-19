import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-prototype2',
  templateUrl: './product-list-prototype2.component.html',
  styleUrls: ['./product-list-prototype2.component.css']
})
export class ProductListPrototype2Component {
  products:number[] = [1,2,3,4,5,6,7,8,9,10];
}
