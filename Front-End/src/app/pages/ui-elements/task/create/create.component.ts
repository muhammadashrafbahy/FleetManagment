import { employee } from './../../../../entities/employee';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TaskServiceService } from '../../../../call_api/task.service';
import Swal from 'sweetalert2';

import { ManagerService } from '../../../../call_api/manager.service';
import { Client } from '../../../../entities/client';
@Component({
  selector: 'app-task-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
    bsValue1: Date = new Date();
    bsValue2: Date = new Date();
    lat = 31.150735;
    lng = 30.112281;
    zoom = 7;
    loc:string ='';
    
    private empls:any;
    private clients:any;

    address:string="";
    start_date:Date;
    exp_date:Date;
    task_name:string;
    client_name:number;
    emp_id_str:string;
    task_desc:string;
    selectName(){

     
        
    }
    public placeMarker($event){
        console.log($event.coords.lat);
        console.log($event.coords.lng);
        this.lat=$event.coords.lat;
        this.lng=$event.coords.lng;  
    }
    public mark(){
      console.log("mmmmmmm")
      this.loc = this.lat + ' -- ' + this.lng;
    }
  constructor(private srv:TaskServiceService , private mng_srv:ManagerService) {
       
        

  }

  add_task(){

    Swal({
        title: 'Are you You Want to Add  this Task to an Employee  ?',
        text: 'You will not be able to recover this Task!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
  
        
            console.log("lat and lng =="+this.lat+this.lng );
            var emp_id:number=0;
            this.mng_srv.get_address(this.lat,this.lng).subscribe(data => {
              console.log(data), 
            this.address = data.results[0].formatted_address,
             console.log(this.address) ,
              emp_id=+this.emp_id_str;
            this.srv.add_task(this.client_name, emp_id, this.exp_date, this.start_date,
             this.task_desc, this.lat, this.lng, this.task_name , this.address);
        },
        err => alert("ERROR IN ADDRESS ==>"+err)
        )
        
  
  
        Swal(
            'Added!',
            'Your Task  has been Added ',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your Task has not been Added !',
            'error'
          )
        }
      })
    }
    


  ngOnInit() {
 this.mng_srv.all_emp().subscribe(data => {this.empls=data , console.log(data) }, err => {alert(err+"empsssss")});
        this.mng_srv.all_clients().subscribe(data => {this.clients=data, console.log(data) }, err => {alert(err+"clssssssss")});


      $('input[type="text"]').on('focusout' , function() {
          if ($(this).val() !== '') {
              $(this).parent().addClass('has-data');
          }else {
              $(this).parent().removeClass('has-data');
          }
      });

      $('textarea').on('focusout' , function() {
          if ($(this).val() !== '') {
              $(this).parent().addClass('has-data');
          }else {
              $(this).parent().removeClass('has-data');
          }
      });

      $('.location').on('focusout' , function() {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').focus()
          })
    });
  }

}
