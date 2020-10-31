import { UploadImageService } from './../../../../call_api/upload-image.service';
import { EmployeeService } from './../../../../call_api/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from './../../../../entities/employee';
//import { NgModule } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-create',
  templateUrl: './create_employee.component.html',
  styleUrls: ['./create_employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsValue1: Date = new Date();


// declations attribute 
emp_fname : string;
emp_lname: string;
emp_username: string;
emp_passwd: string;
emp_email: string;
emp_salary :number;
emp_phone: string;
emp_Bdate: Date;
emp_Regist_date:Date;




  constructor(private route:Router, private api:EmployeeService, private UploadImageService:UploadImageService) { }

  ngOnInit() {
    $('input[type="text"]').on('focusout' , function() {
      if ($(this).val() !== '') {
          $(this).parent().addClass('has-data');
      }else {
          $(this).parent().removeClass('has-data');
      }
  });
  $('input[type="password"]').on('focusout' , function() {
    if ($(this).val() !== '') {
        $(this).parent().addClass('has-data');
    }else {
        $(this).parent().removeClass('has-data');
    }
});
$('input[type="text"]').on('focusout' , function() {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
      })
});

  }// end init method



  create_emp(){ 
        Swal({
          title: 'Are you You Want to Add this Employee ?',
          type: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            console.log("create employee start in ts ");
            this.api.create_employee(this.emp_fname,this.emp_lname,this.emp_username,this.emp_passwd,this.emp_email,this.emp_salary,
                this.emp_phone,this.emp_Bdate,this.emp_Regist_date);
            
                console.log("create employee emd in ts ");
            Swal(
              'Added!',
              'Your Employee  has been Added :)',
              'success'
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal(
              'Cancelled',
              'Your Employee has not been Added !',
              'error'
            )
          }
        })

  
        /********************* */
        this.UploadImageService.upload(this.emp_fname);

        /************************ */
  
      }// end create emp method



}
