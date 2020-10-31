import { Locale } from 'ngx-bootstrap/bs-moment/locale/locale.class';
import { Router } from '@angular/router';
import { category } from './../../../../entities/Category';
import { CategoryService } from '../../../../call_api/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-category-create',
  templateUrl: './create_category.component.html',
  styleUrls: ['./create_category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  private cat = new category();
  private name:string;
  constructor(private categoryService:CategoryService,private route:Router) { }



  ngOnInit() {
    $('input[type="text"]').on('focusout' , function() {
      if ($(this).val() !== '') {
          $(this).parent().addClass('has-data');
      }else {
          $(this).parent().removeClass('has-data');
      }
  });
  let s = localStorage.getItem("cat_id");
  if(s!=null){
    this.categoryService.getCategory(+s).subscribe((c)=>{
      this.cat=c;
    });
    $('input[type="text"]').parent().addClass('has-data');
  }
  console.log(s);
  localStorage.removeItem("cat_id");

  }
  test(){
    Swal('Oops...', 'Something went wrong!', 'error')
  }

  addCategory(){
    if(this.cat.categ_id!=undefined){
      Swal({
        title: 'Are you You Want to Update ?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.categoryService.updateCategory(this.cat).subscribe((cat)=>{
            console.log(cat);
            this.route.navigate(['/category/all-category']);
          },(error)=>{
            alert(error);
          })
          Swal(
            'Updated!',
            'Your Catedory  has been Updated :)',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your Catedory has not been Updated !',
            'error'
          )
        }
      })
    }else{  
      Swal({
        title: 'Are you You Want to Add this Category ?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.categoryService.createCategory(this.cat).subscribe((cat)=>{
            console.log(this.cat);
            this.route.navigate(['/category/all-category'])
          },(error)=>{
            alert(error);
          })
          Swal(
            'Added!',
            'Your Catedory  has been Added :)',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your Catedory has not been Added !',
            'error'
          )
        }
      })

    }

  }

}
