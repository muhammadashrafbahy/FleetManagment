import { element } from 'protractor';


import { ManagerService } from './../../../../call_api/manager.service';
import { manager } from './../../../../entities/manager';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl ,AbstractControl } from '@angular/forms';
// import { email_exist } from '../../../../validator/email_exist';





@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit 
{ 
  constructor( private api:ManagerService , private route:Router   ) {
   }

   validateEmailNotTaken(control: AbstractControl) {
    return this.api.all_managers(control.value).map(res => {
      return res ? { emailTaken: false }: { emailTaken: true };
    });
  }

  lat = 31.150735;
  lng = 30.112281;
  zoom = 7;
  // loc:string="30.0 -- 30.0";
   address:string=""
  managers:any;
    loc_array:string[];
  addressForm = new FormGroup({
 
  comp_email:new FormControl("", [Validators.required , Validators.email], this.validateEmailNotTaken.bind(this) ),
  
  comp_field:new FormControl("", Validators.required),
  loc:new FormControl(),
  comp_lat:new FormControl(),
  comp_long:new FormControl(),
  comp_name:new FormControl("", [Validators.required , Validators.minLength(5),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
  comp_passwd:new FormControl("", [Validators.required,Validators.minLength(5)]),
  comp_phone:new FormControl("",[Validators.required,Validators.minLength(5) ,Validators.pattern("[0-9]*")]),
  comp_website:new FormControl("", [Validators.required,Validators.minLength(5)]),

  });
  // mng:manager=undefined;
  // api:ManagerService;


  register(){
     
    //  this.addressForm.value.loc="30.0 -- 30.0";
 
  console.log("lat and lng =="+this.lat+this.lng );

this.api.get_address(this.lat,this.lng).subscribe(data => {
  console.log(data), 
this.address = data.results[0].formatted_address,
 console.log(this.address) ,

   
  this.addressForm.value.comp_lat=+this.lat,
  this.addressForm.value.comp_long=+this.lng,

  this.api.register(this.addressForm.value.comp_field,this.addressForm.value.comp_lat,
  this.addressForm.value.comp_long,this.addressForm.value.comp_name,
  this.addressForm.value.comp_passwd,this.addressForm.value.comp_phone
  ,this.addressForm.value.comp_website,this.addressForm.value.comp_email,this.address)
},
err => alert("ERROR IN ADDRESS ==>"+err)
)
      
       
       
       
   


}
  public placeMarker($event){
      console.log($event.coords.lat);
      console.log($event.coords.lng);
      this.lat=$event.coords.lat;
      this.lng=$event.coords.lng;  
  }
  public mark(){
    console.log("mmmmmmm");
  
  this.addressForm.value.loc = this.lat + ' -- ' + this.lng;
  }
 

  ngOnInit() { 
        
    // this.api.all_managers().subscribe(data =>{ this.managers=data , console.log(data)}, err => console.log(err)); 
    $('.location').on('focusout' , function() {
      $('#myModal').on('shown.bs.modal', function () {
          $('#myInput').focus()
        })
  });
  }

}
