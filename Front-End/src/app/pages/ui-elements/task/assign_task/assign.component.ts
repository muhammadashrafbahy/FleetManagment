import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../../call_api/manager.service';
import { TaskServiceService } from '../../../../call_api/task.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-task-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {


  tasks_id:number;
  emps_id:number;

  private empls:any;
  private tasks:any;
  constructor(private mng_srv:ManagerService , private task_srv:TaskServiceService) { }

  ngOnInit() {
    this.mng_srv.all_emp().subscribe(data => {this.empls=data , console.log(data) }, err => {alert(err+"empsssss")});
    this.mng_srv.all_task().subscribe(info => {this.tasks =info , console.log(info)},
    err => {console.log(err)});
  }

  assigTask(){
    Swal({
      title: 'Are you You Want to Assign  this Task to an Employee  ?',
      text: 'You will not be able to recover this Task!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

      
   this.task_srv.assign_task(this.tasks_id,this.emps_id);


      Swal(
          'Assigned!',
          'Your Task  has been Assigned ',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your Task has not been Assigned !',
          'error'
        )
      }
    })
  }

}
