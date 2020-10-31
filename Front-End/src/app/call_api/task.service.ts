import { task } from './../entities/task';
import { Injectable } from '@angular/core';

import { Http ,Response ,Headers , RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class TaskServiceService {
   headers = new Headers({'Content-type': 'application/json'});
   options = new RequestOptions({ headers: this.headers });
   private URL ='http://localhost:8099/up'

  constructor(private http:Http , private route:Router) { }

add_task(client_name, emp_id, exp_date, start_date, task_descript, task_lat, task_long, task_name , address){
  var token:string=localStorage.getItem("access_token");
  this.http.post(this.URL+"/add_task?access_token="+token,{

    client_name:client_name,
    emp_id:emp_id,
    exp_date:exp_date, 
    start_date:start_date, 
    state:"notDone", 

    task_descript:task_descript, 
    task_address:address, 
    task_lat:task_lat, 
    task_long:task_long, 
    task_name:task_name,
    },this.options).subscribe(
      data => {
        {console.log(data),console.log("the task added"), this.route.navigate(['/task/all-tasks'])}
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          alert(err);
        }
      })


}

assign_task(task_id,emp_id){ 
  var token:string=localStorage.getItem("access_token");
  this.http.post(this.URL+"/tasks/assign/"+emp_id+"?access_token="+token,{

    
   
    task_id:task_id,
    },this.options).subscribe(
      data => {
        {console.log(data),console.log("the task added"), this.route.navigate(['/task/all-tasks'])}
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          alert(err);
        }
      })


}


delete(id){
  var token:string=localStorage.getItem("access_token");
  return this.http.delete(this.URL+"/delete_task/"+id+"?access_token="+token,this.options).map(res => res.json());


}
get(id){

  var task:any;
  var token:string=localStorage.getItem("access_token");
  return this.http.get(this.URL+"/get_task/"+id+"?access_token="+token,this.options).map(res =>res.json());


}

update(id,name , emp ,client ,state ,start ,end,lat ,lng){

  var task:any;
  var token:string=localStorage.getItem("access_token");
this.http.put(this.URL+"/update_tasks/"+id+"?access_token="+token,{

  client_name:client,
  emp_id:emp,
  exp_date:end, 
  start_date:start, 
  state:state, 
  task_address:"",
  task_descript:"task_descript",  
  task_lat:lat, 
  task_long:lng, 
  task_name:name,
},this.options).map(res =>res.json()).subscribe(
  data => {
    {console.log(data), this.route.navigate(['/task/all-tasks'])}
  },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Client-side error occured.");
    } else {
      alert(err);
    }
  })


}
search_task( exp_date, start_date){
  var token:string=localStorage.getItem("access_token");
  return this.http.post(this.URL+"/tasks/search?access_token="+token,{

    
    exp_date:exp_date, 
    start_date:start_date, 
  
    },this.options).map(res => res.json());


}

}
