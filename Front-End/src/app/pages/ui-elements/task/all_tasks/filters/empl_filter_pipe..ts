import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "employeeFilter"
})
export class employeeFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
         if(!array) return [];
         
        if (query) {
            return _.filter(array, row=>row.emp_name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()  ) > -1
             || row.task_name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()  ) > -1
             || row.client_name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()  ) > -1);
        }
        return array;
    }
}