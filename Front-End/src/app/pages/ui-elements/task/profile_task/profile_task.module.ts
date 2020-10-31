import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTaskComponent } from './profile_task.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {HttpModule} from '@angular/http';
import {QuillEditorModule} from 'ngx-quill-editor/index';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import {AngularEchartsModule} from 'ngx-echarts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {AgmCoreModule} from '@agm/core';





export const ProfileTaskRoutes: Routes = [
  {
    path: '',
    component: ProfileTaskComponent,
    data: {
      breadcrumb: 'Task Profile',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forChild(ProfileTaskRoutes),
    SharedModule,
      FormsModule,
      QuillEditorModule,
      HttpModule,
      DataTableModule,
      QuillEditorModule,
      HttpModule,
      BsDatepickerModule.forRoot(),
      AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'}),

  ],
  declarations: [ProfileTaskComponent]
})
export class ProfileTaskModule { }
