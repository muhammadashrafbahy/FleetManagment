import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEmployeeComponent } from './profile_employee.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {HttpModule} from '@angular/http';
import {QuillEditorModule} from 'ngx-quill-editor/index';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import {AngularEchartsModule} from 'ngx-echarts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {AgmCoreModule} from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';





export const ProfileEmployeeRoutes: Routes = [
  {
    path: '',
    component: ProfileEmployeeComponent,
    data: {
      breadcrumb: 'Employee Profile',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileEmployeeRoutes),
    SharedModule,
      FormsModule,
      QuillEditorModule,
      HttpModule,
      DataTableModule,
      QuillEditorModule,
      HttpModule,
      BsDatepickerModule.forRoot(),
      AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'}),
      AgmJsMarkerClustererModule

  ],
  declarations: [ProfileEmployeeComponent]
})
export class ProfileEmployeeModule { }
