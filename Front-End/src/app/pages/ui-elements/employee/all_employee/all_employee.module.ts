import { DataFilterPipe2 } from './data-filter-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEmployeeComponent } from './all_employee.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {HttpModule} from '@angular/http';
import {QuillEditorModule} from 'ngx-quill-editor/index';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';

export const AllEmployeeRoutes: Routes = [
  {
    path: '',
    component: AllEmployeeComponent,
    data: {
      breadcrumb: 'All Employee',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AllEmployeeRoutes),
    SharedModule,
      FormsModule,
      QuillEditorModule,
      HttpModule,
      DataTableModule,
  ],
  declarations: [AllEmployeeComponent,DataFilterPipe2]
})
export class AllEmployeeModule { }
