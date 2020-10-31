import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const EmployeeRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Employee',
      status: false
    },
    children: [
        {
            path: 'create-employee',
            loadChildren: './create_employee/create_employee.module#CreateEmployeeModule'
      },
        {
            path: 'all-employee',
            loadChildren: './all_employee/all_employee.module#AllEmployeeModule'
        },
        {
          path: 'employee-profile',
          loadChildren: './profile_employee/profile_employee.module#ProfileEmployeeModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRoutes),
    SharedModule
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
