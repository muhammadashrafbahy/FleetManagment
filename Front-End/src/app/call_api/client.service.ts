import { Injectable } from '@angular/core';
import { Http ,Response ,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Client } from '../entities/client';



@Injectable()
export class ClientService {

  private baseUrl:string='http://localhost:8099/up';

  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private client:Client;
  constructor(private _http:Http) { }

  getClients(){
    return this._http.get(this.baseUrl+'/mng/allcl?access_token='+localStorage.getItem("access_token"),this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  getClient(client_id:Number){
    return this._http.get(this.baseUrl+'/get_client/'+client_id+'?access_token='+localStorage.getItem("access_token"),this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteClient(client_id:Number,cat_id:Number){
    return this._http.delete(this.baseUrl+'/delete_clients/'+client_id+'/'+cat_id+'?access_token='+localStorage.getItem("access_token"),this.options)
    .map((response:Response)=>response)
    .catch(this.errorHandler);
  }

  createClient(client:Client){
    return this._http.post(this.baseUrl+'/add_clients?access_token='+localStorage.getItem("access_token"),JSON.stringify(client),this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateClient(client:Client){
    return this._http.put(this.baseUrl+'/update_clients/'+client.clients_id+'?access_token='+localStorage.getItem("access_token"),JSON.stringify(client),this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }


  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }

  setter(client:Client){
    this.client=client;
  }

  getter(){
    return this.client;
  }

}
