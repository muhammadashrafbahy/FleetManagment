import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CreateComponent} from './create.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {AgmCoreModule} from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const CreateRoutes: Routes = [
  {
    path: '',
    component: CreateComponent,
    data: {
      breadcrumb: 'Add New Task',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CreateRoutes),
    SharedModule,
    BsDatepickerModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'}),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }
