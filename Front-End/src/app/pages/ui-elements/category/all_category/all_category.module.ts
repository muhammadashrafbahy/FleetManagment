import { DataFilterPipe } from './data-filter-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoryComponent } from './all_category.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import {QuillEditorModule} from 'ngx-quill-editor';
import {HttpModule} from '@angular/http';

export const AllCategoryRoutes: Routes = [
  {
    path: '',
    component: AllCategoryComponent,
    data: {
      breadcrumb: 'All Category',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AllCategoryRoutes),
    SharedModule,
      FormsModule,
      QuillEditorModule,
      HttpModule,
      DataTableModule,
  ],
  declarations: [AllCategoryComponent,DataFilterPipe]
})
export class AllCategoryModule { }
