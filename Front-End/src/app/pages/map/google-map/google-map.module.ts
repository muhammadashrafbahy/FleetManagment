import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import {HttpModule} from '@angular/http';



export const googleRoutes: Routes = [
  {
    path: '',
    component: GoogleMapComponent,
    data: {
      breadcrumb: 'Home',
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
    HttpModule
  ],
  declarations: [GoogleMapComponent]
})
export class GoogleMapModule { }
