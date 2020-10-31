import { manager } from './../../entities/manager';
import { Component, OnInit } from '@angular/core';
import { BsModalComponent } from 'ng2-bs3-modal';
import { ManagerService } from '../../call_api/manager.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  comp_email:string;
  comp_field:string;
  comp_name:string;
  comp_lat:number;
  comp_long:number;
  comp_address:string;
  comp_passwd:string;
  comp_phone:string;
  comp_website:string;

  comp_email_update:string;
  comp_field_update:string;
  comp_name_update:string;
  comp_lat_update:number;
  comp_long_update:number;

  comp_passwd_update:string;
  comp_phone_update:string;
  comp_website_update:string;


  lat = 31.150735;
  lng = 30.112281;

  
  latA =31.150735 ;
  lngA = 30.112281;
  zoom = 7;

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();


    editProfile = true;
    editProfileIcon = 'icofont-edit';
    editAbout = true;
    editAboutIcon = 'icofont-edit';  
    constructor(private srv:ManagerService) {
   var   item= localStorage.getItem("manager") ;
  var mng:manager  = JSON.parse(item);

  this.comp_email=mng.comp_email;
  this.comp_field=mng.comp_field;
  this.comp_name=mng.comp_name;
  this.comp_lat=+mng.comp_lat;
  this.comp_long=+mng.comp_long;
  this.comp_address=mng.comp_city;
  this.comp_passwd=mng.comp_passwd;
  this.comp_phone=mng.comp_phone;
  this.comp_website=mng.comp_website;
        this.lat=mng.comp_lat;
        this.lng=mng.comp_long;

    }
    ngOnInit() {
        
      $('input[type="text"]').on('focusout' , function() {
        if ($(this).val() !== '') {
            $(this).parent().addClass('has-data');
        }else {
            $(this).parent().removeClass('has-data');
        }
    });
    }
    toggleEditProfile() {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
      }
    
      toggleEditAbout() {
        this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editAbout = !this.editAbout;
      }


      update(){
       
        
    Swal({
      title: 'Are you You Want to Update  this Manager ?',
      text: 'You will not be able to recover this Task!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

      
       console.log(this.comp_name_update);

        this.srv.update_manager(this.comp_field,this.comp_lat,this.comp_long,this.comp_name,this.comp_passwd,this.comp_phone,this.comp_website,this.comp_email);      
  


      Swal(
          'Update!',
          'Your Manager  has been Update ',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your Manager has not been Added !',
          'error'
        )
      }
    })
         }
        
        
        }

