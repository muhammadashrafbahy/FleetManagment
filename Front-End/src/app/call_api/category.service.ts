import { Injectable } from '@angular/core';
import { category } from './../entities/Category';
import { Http ,Response ,Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CategoryService {

  
  private URL:string = 'http://localhost:8099/up';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  
  private cat = new category();

  constructor(private  http :Http) { }

  getAllCategories(){
    var token=localStorage.getItem("access_token");
    return this.http.post(this.URL+'/cat/getall?access_token='+token,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  getAllEmployee(){
    var token=localStorage.getItem("access_token");

    let headerss = new Headers({'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
    let optionss = new RequestOptions({headers:headerss});
    return this.http.get(this.URL+'/mng/allempl?access_token='+token,optionss).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getCategory(id:number){
    var token=localStorage.getItem("access_token");

    return this.http.get(this.URL+'/get_catg/'+id+'?access_token='+token,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteCategory(id:number){
    var token=localStorage.getItem("access_token");

    return this.http.delete(this.URL+'/delete_catg/'+id+'?access_token='+token,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  createCategory(cat:category){
    var token=localStorage.getItem("access_token");

    return this.http.post(this.URL+'/add_catg?access_token='+ token,JSON.stringify(cat),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  
  updateCategory(cat:category){
    var token=localStorage.getItem("access_token");

    return this.http.put(this.URL+'/update_catg/'+cat.categ_id+'?access_token='+token,JSON.stringify(cat),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  setter(cat){
    this.cat=cat;
  }
  getter(){
    return this.cat;
  }
  errorHandler(error:Response){
      return Observable.throw(error||"SERVER ERROR");
  }
}
