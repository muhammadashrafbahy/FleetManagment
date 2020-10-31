import { dateFilterPipe } from './filters/date-filter-pipe';
import { employeeFilterPipe } from './filters/empl_filter_pipe.';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';


export const AllRoutes: Routes = [
  {
    path: '',
    component: AllComponent,
    data: {
      breadcrumb: 'All Tasks',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AllRoutes),
    SharedModule,
    BsDatepickerModule.forRoot(),
      FormsModule,
      QuillEditorModule,
      HttpModule,
      DataTableModule,
  ],
  declarations: [AllComponent,employeeFilterPipe,dateFilterPipe]
})
export class AllModule { }
