import { Router } from '@angular/router';
import { EmployeeService } from './../../../../call_api/employee.service';
import { employee } from './../../../../entities/employee';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-all',
  templateUrl: './all_employee.component.html',
  styleUrls: ['./all_employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
    public data: any;
    public rowsOnPage = 5;
    public filterQuery = '';
    public sortBy = '';
    public sortOrder = 'desc';



  private URL ='http://localhost:8099'
  public redirectUrl: string;
  private authUrl = this.URL + '/oauth/token';

    constructor(public http: Http , private api:EmployeeService,private route:Router) {
    }

    ngOnInit() {


        let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
        let options = new RequestOptions({ headers: headers });
        var token:string=localStorage.getItem("access_token");
        console.log(token);
        // this.http.get(this.URL+'/up/mng/allempl?access_token='+token,options).map(res=>res.json() ).subscribe(
        //     data =>  localStorage.setItem("allemp",JSON.stringify(data) ),
        //     err => console.log(err)
      
        //   )
      

        this.http.get(this.URL+'/up/mng/allempl?access_token='+token,options).subscribe((c) => {
            this.data = c.json();
            console.log(this.data);
        });
    }


delete_emp(emp:employee){
    Swal({
        title: 'Are you You Want to Delete this Employee ?',
        text: 'You will not be able to recover this Employee!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
            console.log(emp.emp_id+" id     = ");
            this.api.delete_empl(emp);
            this.data.splice(this.data.indexOf(emp),1);
            console.log("deleted");
            
        Swal(
            'Deleted!',
            'Your Employee  has been Deleted ',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your Employee has not been Deleted !',
            'error'
          )
        }
      })


}// end delete method


view_emp(emp:employee){

    // [routerLink]="'/employee/employee-profile'"

localStorage.setItem("emp_id",emp.emp_id+"");


this.route.navigate(['/employee/employee-profile']);


}

}
