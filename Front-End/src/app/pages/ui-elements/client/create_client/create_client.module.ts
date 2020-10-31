import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {CreateClientComponent} from './create_client.component';
import { FormsModule } from '@angular/forms';

export const CreateClientRoutes: Routes = [
  {
    path: '',
    component: CreateClientComponent,
    data: {
      breadcrumb: 'Add New Client',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CreateClientRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [CreateClientComponent]
})
export class CreateClientModule { }
