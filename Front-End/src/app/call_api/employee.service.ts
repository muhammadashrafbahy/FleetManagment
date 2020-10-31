import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserToken } from './UserToken';
import { Injectable } from '@angular/core';
import {employee} from './../entities/employee';
 
@Injectable()
export class EmployeeService {

  private URL ='http://localhost:8099'
  public redirectUrl: string;
  private authUrl = this.URL + '/oauth/token';


  private currentUserToken: UserToken;

  constructor(private  http :Http , private route:Router) { }

create_employee(emp_fname,emp_lname,emp_username,emp_passwd,emp_email,emp_salary,
  emp_phone,emp_Bdate,emp_Regist_date){
    console.log("  in employee service at first");


  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  var token:string=localStorage.getItem("access_token");
  console.log(token+"      in employee");

  /*
  let params = new URLSearchParams();
    params.append('access_token', '772035e1-223f-4f97-b8f1-9e12d723d968');
  */
 this.http.post(this.URL+'/up/add_empl?access_token='+token,{

  emp_fname : emp_fname ,
  emp_lname: emp_lname ,
  emp_username: emp_username,
  emp_passwd: emp_passwd,
 emp_email: emp_email,
  emp_salary :emp_salary,
  emp_phone: emp_phone,
 emp_Bdate: emp_Bdate,
  emp_Regist_date:emp_Regist_date, 

 },options).map(res => res.json())
 .subscribe(
  data => {
    console.log(data);
  },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("employee-side error occured.");
    } else {
      console.log(err);
    }
  })
  console.log("  in employee service at last");

this.route.navigate(['/employee/all-employee']);
} // end create_emp method


load_all_emp(){

  let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
  let options = new RequestOptions({ headers: headers });
  var token:string=localStorage.getItem("access_token");
  console.log(token);
  this.http.get(this.URL+'/up/mng/allempl?access_token='+token,options).map(res=>res.json() ).subscribe(
      data =>  localStorage.setItem("allemp",JSON.stringify(data) ),
      err => console.log(err)

    );

}

update_emp(emp_fname,emp_lname,emp_username,emp_email,emp_salary,
  emp_phone,emp_Bdate,emp_Regist_date){
    console.log("  in employee service at first");


  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  var token:string=localStorage.getItem("access_token");
  console.log(token+"      in employee");

  /*
  let params = new URLSearchParams();
    params.append('access_token', '772035e1-223f-4f97-b8f1-9e12d723d968');
  */
 this.http.put(this.URL+'/up/update_empl/?access_token='+token,{

  emp_fname : emp_fname ,
  emp_lname: emp_lname ,
  emp_username: emp_username,
 emp_email: emp_email,
  emp_salary :emp_salary,
  emp_phone: emp_phone,
 emp_Bdate: emp_Bdate,
  emp_Regist_date:emp_Regist_date, 

 },options).map(res => res.json())
 .subscribe(
  data => {
    console.log(data);
  },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("employee-side error occured.");
    } else {
      console.log(err);
    }
  })
  console.log("  in employee service at last");

this.route.navigate(['/home']);
} // end create method


delete_empl(obj:employee){


  let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
  let options = new RequestOptions({ headers: headers });
  var token:string=localStorage.getItem("access_token");
  console.log(token+"\n"+obj.emp_id);

  this.http.delete(this.URL+'/up/delet_empl/'+obj.emp_id+'?access_token='+token,options).subscribe(
    data =>  console.log(data),
    err => console.log(err)
  );


}// end delete_emp method 

update_empl(obj:employee){
  let headers = new Headers({'Content-type': 'application/json', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
  let options = new RequestOptions({ headers: headers });
  var token:string=localStorage.getItem("access_token");
  console.log(token+"\n"+obj.emp_id);
  return this.http.put(this.URL+'/up/update_empl/'+obj.emp_id+'?access_token='+token,JSON.stringify(obj),options).map(res =>res);

}// end update_emp method


}// end class

/*

{
	"task_long":30.720272  ,
	"task_lat":30.720272 ,
	"exp_date":2018-06-08 04:27:53,
	"start_date":2018-06-06 04:27:53,
	"task_descript":"porto",
	"task_name":"name of task",
	"task_city":"badr",
	"task_country":"Egypt",
	"task_dist":"porto",
	"client_name":"osama",
	"state":"Done"
	
	
}

*/