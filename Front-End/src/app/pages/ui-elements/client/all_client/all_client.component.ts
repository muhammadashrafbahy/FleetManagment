import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ClientService} from '../../../../call_api/client.service';

import {Router} from '@angular/router';
import { Client } from '../../../../entities/client';


@Component({
  selector: 'app-client-all',
  templateUrl: './all_client.component.html',
  styleUrls: ['./all_client.component.css']
})
export class AllClientComponent implements OnInit {

    private clients:Client[];
    

    public data: any;
    public rowsOnPage = 5;
    public filterQuery = '';
    public sortBy = '';
    public sortOrder = 'desc';

    constructor(public http: Http,private _clientService:ClientService,private _router:Router) {
    }
  ngOnInit() {


      this._clientService.getClients().subscribe((clients)=>{
        console.log(clients);
          this.data=clients;
      },(error)=>{
          console.log(error);
      })

  }

  deleteclient(client:Client){
      this._clientService.deleteClient(client.clients_id,client.cat_id).subscribe((dataa)=>{
        //   this.data.splice(this.data.indexOf(client),1);
        this._clientService.getClients().subscribe(info => this.data=info );
          console.log(this.clients);
      },(error)=>{
          console.log(error);
      });
  }
  updateclient(client:Client){
    localStorage.setItem("client_id",JSON.stringify(client.clients_id));
    this._router.navigate(['/client/create-client']);
  }

  newclient(){
      let client = new Client();
      this._clientService.setter(client);
      this._router.navigate(['/client/create-client']);

  }

}
