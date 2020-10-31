import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { AuthGuard } from './call_api/auth-guard.service';

export const AppRoutes: Routes = [
{
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'authentication/login',
        pathMatch: 'full'
      },
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    canActivate:[AuthGuard],
    component: AdminComponent,
    children: [ 
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      },
        {
            path: 'task',
            loadChildren: './pages/ui-elements/task/task.module#TaskModule'
        }
        ,
        {
            path: 'employee',
            loadChildren: './pages/ui-elements/employee/employee.module#EmployeeModule'
        },
        {
            path: 'client',
            loadChildren: './pages/ui-elements/client/client.module#ClientModule'
        },
        {
            path: 'category',
            loadChildren: './pages/ui-elements/category/category.module#CategoryModule'
        }, 
        {
        path: 'home',
        loadChildren: './pages/map/google-map/google-map.module#GoogleMapModule',
      }, 
      {
      path: 'profile',
      loadChildren: './pages/profile/profile.module#ProfileModule',
    }
    ]
  }
];
