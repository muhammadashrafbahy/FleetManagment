import { employee } from './../../../../entities/employee';
import { EmployeeService } from './../../../../call_api/employee.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import {animate, style, transition, trigger} from '@angular/animations';
import '../../../../../assets/charts/echart/echarts-all.js';
import {GoogleMapComponent} from '../../../map/google-map/google-map.component';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-employee-profile',
  templateUrl: './profile_employee.component.html',
  styleUrls: ['./profile_employee.component.css'],
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
export class ProfileEmployeeComponent implements OnInit {
  private URL ='http://localhost:8099'
  public redirectUrl: string;
  private authUrl = this.URL + '/oauth/token';

  /***************************** Attribute  *************************/
fname:string;
lname:string;
Bdate:string;
salary:string;
usrname:string;
email:string;
phone:string;
dateOFregist:string;
lat:number;
lng:number;
id:number;
finishedTasks:number=0;
unFinishedTasks:number=0;



  /***********************************************************/
  //lat = 31.150735;
  //lng = 30.112281;
  latA =31.150735 ;
  lngA = 30.112281;
  zoom = 7;
  minDate = new Date(1900, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date;
  bsValue1: Date ;
  date_birth:Date;
  reg_dat:Date;

  markerss:markers[]=[];
  markerss2:markers2[]=[];
  emp=new employee();


    editProfile = true;
    editProfileIcon = 'icofont-edit';
    editAbout = true;
    editAboutIcon = 'icofont-edit';  
    constructor(private  http :Http , private route:Router, private api:EmployeeService) {
    }

    ngOnInit() {
this.getemp_info();
      $('input[type="text"]').on('focusout' , function() {
        if ($(this).val() !== '') {
            $(this).parent().addClass('has-data');
        }else {
            $(this).parent().removeClass('has-data');
        }
    });
    this.getTasksForEmp();
    }
    toggleEditProfile() {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
      }
    
      toggleEditAbout() {
        this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editAbout = !this.editAbout;
      }


      getemp_info(){
  
        let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
        let options = new RequestOptions({ headers: headers });
        var token:string=localStorage.getItem("access_token");
        console.log(token);
        var id= +localStorage.getItem("emp_id");
        this.http.get(this.URL+'/up/get_empl/'+id+'?access_token='+token,options).map(res=>res.json() ).subscribe((data)=>{
          this.phone=data.emp_phone;
          this.fname=data.emp_fname;
          this.salary=data.emp_salary+"";
          this.Bdate=data.emp_Bdate;
          this.lname=data.emp_lname;
          this.usrname=data.emp_username;
          this.email=data.emp_email;
          this.dateOFregist=data.emp_Regist_date;
          this.lat=data.emp_lat;
          this.lng=data.emp_long;
          this.id=data.emp_id;
          this.date_birth= new Date(this.Bdate);
          this.reg_dat= new Date(this.dateOFregist);
          console.log(this.bsValue);

          console.log(this.phone+"  "+ this.fname+"   "+this.Bdate+"  "+this.lname+"  "+ this.usrname+"  "+this.email+"   "+this.dateOFregist);
        }
            // data =>  localStorage.setItem("emp",JSON.stringify(data) )
            ,
            err => console.log(err),
            
          )
          console.log(localStorage.getItem("emp"));            
      }
      update_emp(){

        Swal({
          title: 'Are you You Want to Update this Employee ?',
          type: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            this.emp.emp_Bdate=this.date_birth+"";
            this.emp.emp_fname=this.fname;
            this.emp.emp_lname=this.lname;
            this.emp.emp_phone=this.phone;
            this.emp.emp_email=this.email;
            this.emp.emp_salary= +this.salary;
            this.emp.emp_Regist_date=this.reg_dat;
            this.emp.emp_lat=this.lat;
            this.emp.emp_long=this.lng;
            this.emp.emp_id=this.id;
            this.emp.emp_username=this.usrname;
            
    
            this.api.update_empl(this.emp).subscribe((d)=>{
              console.log(d);
              this.route.navigate(['/employee/all-employee']);
    
            } );
            Swal(
              'Added!',
              'Your Employee  has been Updated :)',
              'success'
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal(
              'Cancelled',
              'Your Employee has not been Updated !',
              'error'
            )
          }
        })

      //  this.api.update_emp(this.fname,this.lname,this.usrname,this.email,this.salary,this.phone,this.date_birth,this.reg_dat);

      }

      getTasksForEmp(){
        let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
        let options = new RequestOptions({ headers: headers });
        var token:string=localStorage.getItem("access_token");
        console.log(token+"bbbbbbbbbbbbbbbbbbbbbbb");
        var id= +localStorage.getItem("emp_id");
        this.http.get(this.URL+'/up/tasks_for_empl/'+id+'?access_token='+token,options).map((response:Response)=>response.json()).subscribe((task)=>{
          task.forEach(element => {
            var m = new markers();
            var m2 = new markers2();
            if(element['state']=='inProgress'){
              m2.lat=element['task_lat'];
              m2.lng=element['task_long'];
              m2.name= element['task_name'];
              console.log(m2);
              this.markerss2.push(m2);
            }else{
              m.lat=element['task_lat'];
              m.lng=element['task_long'];
              m.name= element['task_name'];
              console.log(m);
              this.markerss.push(m);
              if(element['state']=='Done'){
                this.finishedTasks+=1;
              }else{
                this.unFinishedTasks+=1;
              }
            }
            console.log(this.finishedTasks+"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
            console.log(this.unFinishedTasks+"bbbbbbbbbbbbbbbbbbbbbb");

          });
          console.log(task);
        });
      }
      public testIcon = {
        url: 'http://www.clker.com/cliparts/8/6/U/z/k/o/google-maps-marker-for-residencelamontagne-hi.png', scaledSize: { height: 43, width: 27 } }
        public testIcon2 = {
          url: 'http://www.clker.com/cliparts/U/Q/d/9/V/E/orange-pin-md.png', scaledSize: { height: 43, width: 27 } }

      // 1628add1-5de8-430d-a6a8-d66501cf3be3

}// end class
class markers {
  lat: number;
  lng: number;
  name:string;// not defind until now 
  }
  class markers2 {
    lat: number;
    lng: number;
    name:string;// not defind until now 
    }
