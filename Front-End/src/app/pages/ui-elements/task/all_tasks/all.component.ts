import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ManagerService } from '../../../../call_api/manager.service';
import { TaskServiceService } from '../../../../call_api/task.service';

@Component({
  selector: 'app-task-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  bsValue1: Date = new Date();
  bsValue2: Date = new Date();

    start_date:Date;
    end_date:Date;
    public data: any;
    public rowsOnPage = 5;
    public filterQuery = '';
    public sortBy = '';
    public sortOrder = 'desc';

    constructor(public http: Http , private srv:ManagerService , private tsk:TaskServiceService) {
    
    }
    delete_task(task_id){
      Swal({
        title: 'Are you You Want to Delete this Task ?',
        text: 'You will not be able to recover this Task!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {

          this.tsk.delete(task_id).subscribe(data => this.srv.all_task().subscribe(info => {this.data =info , console.log(info)},
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured.");
            } else {
              alert(err);
            }
          }))
  


        Swal(
            'Deleted!',
            'Your Task  has been Deleted ',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your Task has not been Deleted !',
            'error'
          )
        }
      })

       
    }


    search_date(){
      if(this.start_date && this.end_date){
      console.log("entered");
      // alert(this.start_date +"  "+this.end_date );
      this.tsk.search_task(this.end_date , this.start_date).subscribe(info => {this.data =info , console.log(info)},
      err => {console.log(err)});
      }
    }
    ngOnInit() {
        this.srv.all_task().subscribe(info => {this.data =info , console.log(info)},
    err => {console.log(err)});
    
    }
    clear() {
      this.srv.all_task().subscribe(info => {this.data =info , console.log(info)},
  err => {console.log(err)});
  
  }
}
