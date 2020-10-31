import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignComponent } from './assign.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';

export const AssignRoutes: Routes = [
  {
    path: '',
    component: AssignComponent,
    data: {
      breadcrumb: 'Assign Tasks',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(AssignRoutes),
    SharedModule
  ],
  declarations: [AssignComponent]
})
export class AssignModule { }
