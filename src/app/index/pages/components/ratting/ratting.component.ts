import {Component, Input, OnInit} from '@angular/core';
import { from, Observable} from "rxjs";
import {ProductModel} from "../../../../services/model/ProductModel";

@Component({
  selector: 'app-ratting',
  templateUrl: './ratting.component.html',
  styleUrls: ['./ratting.component.css']
})
export class RattingComponent implements OnInit{

  @Input()
  productModel?:ProductModel;
  @Input()
  ratingOnProduct=0;

  stars:Star[] = [];
  rating = 0;

  ngOnInit(): void {
    let i = 5;
    for (i=1;i<=5;i++){
      this.stars.push({id:i,selected:false})
    }
  }

  hover(star: Star){
    this.rating = star.id;
    for (let i=1;i<=5;i++){
      star.id>=i?this.stars[i-1].selected=true:this.stars[i-1].selected = false;
    }
  }

  vote(){
    alert("rating "+this.rating);
  }


  checkUnVoted(star: Star) {
    if(star.id==1){
      star.selected=!star.selected;
      this.rating = 0;
    }

  }
}

export interface Star{
  id:number,
  selected:boolean
}
