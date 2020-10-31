import { HttpErrorResponse } from '@angular/common/http';
import { task } from './../../../../entities/task';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {animate, style, transition, trigger} from '@angular/animations';
import '../../../../../assets/charts/echart/echarts-all.js';
import {GoogleMapComponent} from '../../../map/google-map/google-map.component';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../../../../call_api/task.service';
import { ManagerService } from '../../../../call_api/manager.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-profile',
  templateUrl: './profile_task.component.html',
  styleUrls: ['./profile_task.component.css'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ProfileTaskComponent implements OnInit {
  lat = 31.150735;
  lng = 30.112281;
  zoom = 7;
  loc:string ='';

  task_name:string;
  client_name:string;
  emp_name:string;
  task_State:string;
  start_date:Date;
  exp_date:Date;
  task_address:String;
  emp_id:number;
  task:any=null;



  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsValue1: Date = new Date();

    editProfile = true;
    editProfileIcon = 'icofont-edit';
    editAbout = true;
    editAboutIcon = 'icofont-edit';  

    private empls:any;
    private clients:any;

id:any;

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
    constructor(private myroutes:ActivatedRoute , private srv:TaskServiceService ,private mng_srv:ManagerService) {
       this.id =this.myroutes.snapshot.params['id'];
      var tsk:string;

        this.srv.get(this.id).subscribe(
          data => {
            {this.task=JSON.parse(JSON.stringify(data)),
              this.task_name=this.task.task_name,
              this.client_name=this.task.client_name,
              this.emp_name=this.task.emp_name,
              this.task_State=this.task.state,
              this.start_date=this.task.start_date,
              this.exp_date=this.task.exp_date,
              this.task_address=this.task.task_address,
              this.emp_id =this.task.emp_id
            }
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured.");
            } else {
              alert(err);
            }
          });

    }
    update_task(){
      Swal({
        title: 'Are you You Want to Update this Task ?',
        text: 'You will not be able to recover this Task!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {

        
          var ids:number=+this.emp_id;
          this.srv.update(this.id,this.task_name , ids ,this.client_name ,this.task_State ,this.start_date ,this.exp_date,this.lat ,this.lng);
        


        Swal(
            'Updated!',
            'Your Task  has been Updated ',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your Task has not been Updated !',
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
    $('.location').on('focusout' , function() {
      $('#myModal').on('shown.bs.modal', function () {
          $('#myInput').focus()
        })
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
}
