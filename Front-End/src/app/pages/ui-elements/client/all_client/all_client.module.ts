import { DataFilterPipe } from './data-filter-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllClientComponent } from './all_client.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';

export const AllClientRoutes: Routes = [
  {
    path: '',
    component: AllClientComponent,
    data: {
      breadcrumb: 'All Client',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AllClientRoutes),
    SharedModule,
      FormsModule,
      QuillEditorModule,
      HttpModule,
      DataTableModule,

  ],
  declarations: [AllClientComponent,DataFilterPipe]
})
export class AllClientModule { }
