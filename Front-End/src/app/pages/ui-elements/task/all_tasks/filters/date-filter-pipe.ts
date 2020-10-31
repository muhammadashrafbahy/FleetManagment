import { task } from './../../../../../entities/task';
import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
    name: "dateFilter"
})
export class dateFilterPipe implements PipeTransform {

    transform(array: any[], start: Date, end:Date): any {
         if(!array) return [];
         if (start && end) {   
        // console.log(start.toDateString());
        console.log(end.getDate());}
         var res:Date[]=[] ;
          
        // var res:any=array[exp_date]
        // console.log(array.indexOf(start));
        for(let obj of array ){
           
          var  tsk:task =obj;
        //   console.log(tsk.exp_date);
                // if(tsk.exp_date >= start && tsk.exp_date <= end){
                    if(tsk.exp_date){
                    // console.log("found");
                     
                    res.push(obj.exp_date);
                }
        }

        if (start && end) {
            start = new Date(start);
            console.log(start);
            return _.filter(array, row=>{
              
                row.exp_date.indexOf(start) > -1
            
            });
        }
        return array;
    }
}