import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productImages: ProductImage[] = [];

  ngOnInit(): void {
    let product1: ProductImage = {id: 1, url: "./assets/shoes_images/shoe_1.jpg"}
    let product2: ProductImage = {id: 2, url: "./assets/shoes_images/shoe_2.jpg"}
    let product3: ProductImage = {id: 3, url: "./assets/shoes_images/shoe_3.jpg"}
    let product4: ProductImage = {id: 4, url: "./assets/shoes_images/shoe_4.jpg"}
    this.productImages.push(product1);
    this.productImages.push(product2);
    this.productImages.push(product3);
    this.productImages.push(product4);
  }


  slide(idx: number) {
    let displayWidth = document.querySelector('.img-showcase img:first-child')?.clientWidth as number;
    let target = document.querySelector('.img-showcase') as HTMLElement
    target.style.transform = `translateX(${-(idx) * displayWidth}px)`
  }
}

export interface ProductImage {
  id: number,
  url: string
}
