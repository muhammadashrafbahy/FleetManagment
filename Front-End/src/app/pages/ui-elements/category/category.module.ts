import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const CategoryRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Category',
      status: false
    },
    children: [
        {
            path: 'create-category',
            loadChildren: './create_category/create_category.module#CreateCategoryModule'
      },
        {
            path: 'all-category',
            loadChildren: './all_category/all_category.module#AllCategoryModule'
        }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
    SharedModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
