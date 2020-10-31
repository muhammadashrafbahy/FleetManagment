import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const ClientRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Client',
      status: false
    },
    children: [
        {
            path: 'create-client',
            loadChildren: './create_client/create_client.module#CreateClientModule'
      },
        {
            path: 'all-client',
            loadChildren: './all_client/all_client.module#AllClientModule'
        }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientRoutes),
    SharedModule
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }
