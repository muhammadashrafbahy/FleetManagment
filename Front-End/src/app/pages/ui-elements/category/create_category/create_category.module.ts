import { category } from './../../../../entities/Category';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../../shared/shared.module';
import {CreateCategoryComponent} from './create_category.component';

export const CreateCategoryRoutes: Routes = [
  {
    path: '',
    component: CreateCategoryComponent,
    data: {
      breadcrumb: 'Add New Category',
      icon: 'icofont-layout bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CreateCategoryRoutes),
    SharedModule,
    FormsModule,
    
    
  ],
  declarations: [CreateCategoryComponent]
})
export class CreateCategoryModule { }
