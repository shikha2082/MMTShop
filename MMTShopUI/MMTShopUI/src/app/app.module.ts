import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { AddEditComponent } from './category/add-edit/add-edit.component';
import { ShowProductsComponent } from './product/show-products/show-products.component';
import { AddEditProductsComponent } from './product/add-edit-products/add-edit-products.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ShowCategoryComponent,
    AddEditComponent,
    ShowProductsComponent,
    AddEditProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
