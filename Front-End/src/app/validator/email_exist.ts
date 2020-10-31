// import { manager } from './../entities/manager';
// import { AbstractControl , ValidatorFn } from "@angular/forms";
// import { ManagerService } from "../call_api/manager.service";
// import { promise } from 'selenium-webdriver';
      
// // export function  email_exist(control:AbstractControl ):{[key:string]:boolean} | null{

// //     this.api.all_managers().subscribe(data =>{ this.managers=data , console.log(data)}, err => console.log(err));
// //     this.managers.array.forEach(element => {
// //       if (control != element.comp_email){
// //           return {"email":true} 

// //       }
// //     });

// //   return null;
// // }
// export function  email_exist(api:ManagerService ):ValidatorFn{
//     return (control:AbstractControl ) =>
//        var res:boolean=false;
//         api.check_manager(control.value).subscribe(data =>{  console.log(data), res=data;
//           if(res){
//             console.log("email_exist ==>"+res );
//             return {email_exists:true};
            
//           }else{
//             console.log("emailnotexist ==>"+res );
//                   //  resolve(null);
//               return null;
           
//           }
//     }, err => {console.log(err)}
  
//   ); 
  
 
//     };
    
//     }