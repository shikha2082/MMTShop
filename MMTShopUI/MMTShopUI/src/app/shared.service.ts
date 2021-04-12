import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'https://localhost:5001';

  constructor(private http:HttpClient) { }

  getCategoryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Category');    
  }

  addCategory(val:any){
    return this.http.post(this.APIUrl+'/Category', val);
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl+'/Category', val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIUrl+'/Category/'+val);
  }

  getProductList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Product');    
  }

  addProduct(val:any){
    return this.http.post(this.APIUrl+'/Product', val);
  }

  updateProduct(val:any){
    return this.http.put(this.APIUrl+'/Product', val);
  }

  deleteProduct(val:any){
    return this.http.delete(this.APIUrl+'/Product/'+val);
  }

  getAllCategoriesNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Product/GetAllCategoriesNames');
  }

  getGetProductRangeByCategory(val:any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Product/GetProductRangeByCategory/'+val);
  }
}
