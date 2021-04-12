import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList:any=[];

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList(){
    this.service.getProductList().subscribe(data => {
      this.ProductList = data;
      console.log(data);
    });

}
}
