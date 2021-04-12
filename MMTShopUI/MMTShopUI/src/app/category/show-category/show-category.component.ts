import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})

export class ShowCategoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductListByCategoryId:any =[];
  CategoryList:any=[];
  ModalTitle:string="";
  ActivateAddEditCatComp:boolean = false;
  cat:any;

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  addClick(){
    this.cat ={
      CategoryId:0,
      CategoryName:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;

  }
  editClick(item:any){
    this.cat = item;
    this.ModalTitle = "Edit Category";
    this.ActivateAddEditCatComp = true;
  }

showProductRangeClick(item:any){
    this.cat = item;
    this.service.getGetProductRangeByCategory(item.CategoryId).subscribe(data => {
      this.ProductListByCategoryId = data;
      console.log(data);
    });
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCategoryList();

  }

  refreshCategoryList(){
    this.service.getCategoryList().subscribe(data => {
      this.CategoryList = data;
      console.log("test data");
      console.log(data);
    });
  }

}
