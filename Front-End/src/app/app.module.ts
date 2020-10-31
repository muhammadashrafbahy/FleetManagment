import { UploadImageService } from './call_api/upload-image.service';

import { EmployeeService } from './call_api/employee.service';
import { CategoryComponent } from './pages/ui-elements/category/category.component';
import { CategoryModule } from './pages/ui-elements/category/category.module';
import { CreateCategoryComponent } from './pages/ui-elements/category/create_category/create_category.component';
import { ManagerService } from './call_api/manager.service';
import { ClientService } from './call_api/client.service';
import { CategoryService } from './call_api/category.service';
import { manager } from './entities/manager';
import { employee } from './entities/employee';
import { category } from './entities/Category';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutes} from './app.routing';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './layout/admin/title/title.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskServiceService } from './call_api/task.service';
import { AuthGuard } from './call_api/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    CategoryModule,
    ReactiveFormsModule
      

  ],

  providers: [ManagerService,EmployeeService,ClientService,CategoryService,TaskServiceService,AuthGuard,UploadImageService],

  bootstrap: [AppComponent]
})
export class AppModule { }
