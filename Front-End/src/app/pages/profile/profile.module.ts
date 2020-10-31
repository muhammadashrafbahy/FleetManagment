import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {HttpModule} from '@angular/http';
import {QuillEditorModule} from 'ngx-quill-editor/index';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import {AngularEchartsModule} from 'ngx-echarts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { BsModalModule } from 'ng2-bs3-modal';


export const googleRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      breadcrumb: 'Profile',
      icon: 'icofont-map bg-c-pink',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(googleRoutes),
    SharedModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'}),
    AgmJsMarkerClustererModule,
    SharedModule,
    FormsModule,
    QuillEditorModule,
    HttpModule,
    DataTableModule,
    HttpModule,
    BsModalModule,
    BsDatepickerModule.forRoot(),
      
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
