import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const TaskRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Task',
      status: false
    },
    children: [
        {
            path: 'create-task',
            loadChildren: './create/create.module#CreateModule'
      },
        {
            path: 'assign-task',
            loadChildren: './assign_task/assign.module#AssignModule'
        },
        {
            path: 'all-tasks',
            loadChildren: './all_tasks/all.module#AllModule'
        },
        {
            path: 'profile-tasks',
            loadChildren: './profile_task/profile_task.module#ProfileTaskModule'
        }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TaskRoutes),
    SharedModule
  ],
  declarations: [TaskComponent]
})
export class TaskModule { }
