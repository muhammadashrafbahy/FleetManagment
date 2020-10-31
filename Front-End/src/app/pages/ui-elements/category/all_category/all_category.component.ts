import { Router } from '@angular/router';
import { category } from './../../../../entities/Category';
import { CategoryService } from './../../../../call_api/category.service';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Locale } from 'ngx-bootstrap/bs-moment/locale/locale.class';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-category-all',
  templateUrl: './all_category.component.html',
  styleUrls: ['./all_category.component.css']
})
export class AllCategoryComponent implements OnInit {
    public data: any;
    public rowsOnPage = 5;
    public filterQuery = '';
    public sortBy = '';
    public sortOrder = 'desc';

    private cats:category[];

    constructor(public http: Http,private categoryService:CategoryService,private route:Router) {
    }
    
    ngOnInit() {
        this.categoryService.getAllCategories().subscribe((cats) => {
            this.data = cats;
            console.log(cats);
        },(error)=>{
            console.log(error);
        }
    );

    }

    delete(cat:category){
        Swal({
            title: 'Are you You Want to Delete this Category ?',
            text: 'You will not be able to recover this Category!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {

            this.categoryService.deleteCategory(cat.categ_id).subscribe((data)=>{
                this.data.splice(this.data.indexOf(cat),1);
            },(error)=>{
                console.log(error);
            });
            Swal(
                'Deleted!',
                'Your Category  has been Deleted ',
                'success'
              )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal(
                'Cancelled',
                'Your Category has not been Deleted !',
                'error'
              )
            }
          })



    }
    update(cat:category){
        localStorage.setItem("cat_id",JSON.stringify(cat.categ_id));
        this.route.navigate(['/category/create-category'])
    }
    

}
