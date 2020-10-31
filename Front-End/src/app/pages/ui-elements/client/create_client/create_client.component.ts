import { category } from './../../../../entities/Category';
import { CategoryService } from './../../../../call_api/category.service';
import { Component, OnInit } from '@angular/core';

import {ClientService} from '../../../../call_api/client.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { error } from 'util';
import { Client } from '../../../../entities/client';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-client-create',
  templateUrl: './create_client.component.html',
  styleUrls: ['./create_client.component.css']
})
export class CreateClientComponent implements OnInit {

  client=new Client();
  private cats:category[]=[];

  constructor(private _clientService:ClientService,private _router:Router,private cat:CategoryService) { }
  
  ngOnInit() {
    // this.client=this._clientService.getter();

    $('input[type="text"]').on('focusout' , function() {
        if ($(this).val() !== '') {
            $(this).parent().addClass('has-data');
        }else {
            $(this).parent().removeClass('has-data');
        }
    });
    let s = localStorage.getItem("client_id");
    if(s!=undefined){
      this._clientService.getClient(+s).subscribe((data)=>{
        this.client=data;
      });
      $('input[type="text"]').parent().addClass('has-data');

    }
    this.cat.getAllCategories().subscribe((c)=>{
      this.cats=c;
    })
    
  }

  create(){
    if(this.client.clients_id!=undefined){
      Swal({
        title: 'Are you You Want to Update this client ?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
      this._clientService.updateClient(this.client).subscribe((data)=>{
        console.log(data);
      },(error)=>{
        console.log(error);
      });
      Swal(
        'Updated!',
        'Your Client  has been Updated :)',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal(
        'Cancelled',
        'Your Client has not been Updated !',
        'error'
      )
    }
  })
      // this._router.navigate(['/client/all-client'])
    }else{
      Swal({
        title: 'Are you You Want to Add this Client ?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {this.client.client_lat=0;
      this.client.client_long=0;
      this.client.client_city="";
      
      this.client.client_distr=""; 
      this._clientService.createClient(this.client).subscribe((client)=>{

        console.log(client);
        this._router.navigate(['/client/all-client'])
      },(error)=>{
        console.log(error);
      });
      Swal(
        'Added!',
        'Your Client  has been Added :)',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal(
        'Cancelled',
        'Your Client has not been Added !',
        'error'
      )
    }
  })
    }
    

  }

}
