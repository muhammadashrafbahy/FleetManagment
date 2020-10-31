import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CreateEmployeeComponent} from './create_employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';// for ngModel
export const CreateEmployeeRoutes: Routes = [
  {
    path: '',
    component: CreateEmployeeComponent,
    data: {
      breadcrumb: 'Add New Employee',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    FormsModule,// for ngModel
    CommonModule,
    RouterModule.forChild(CreateEmployeeRoutes),
    SharedModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [CreateEmployeeComponent]
})
export class CreateEmployeeModule { }
