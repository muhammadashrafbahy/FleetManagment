import { employee } from './../entities/employee';
import { task } from './../entities/task';

import { manager } from './../entities/manager';
import { Injectable } from '@angular/core';
import { Http ,Response ,Headers , RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserToken } from './UserToken';

import 'rxjs/add/operator/toPromise';
import { Locale } from 'ngx-bootstrap/bs-moment/locale/locale.class';
@Injectable()
export class ManagerService {
  private URL ='http://localhost:8099'

  public redirectUrl: string;
  private authUrl = this.URL + '/oauth/token';
  alltasks:any; 
  
  private currentUserToken: UserToken;

  constructor(private  http :Http , private route:Router) { }

  // register(mng:manager){
    register(comp_field,comp_lat,comp_long,comp_name,comp_passwd,comp_phone,comp_website,comp_email, address){
    console.log("registered")
    this.http.post(this.URL+'/register',{

// comp_email:mng.comp_email,
// comp_field:mng.comp_field,
// comp_lat:mng.comp_lat,
// comp_long:mng.comp_long,
// comp_name:mng.comp_name,
// comp_passwd:mng.comp_passwd,
// comp_phone:mng.comp_phone,
// comp_website:mng.comp_website,
// comp_city:"register only",
// comp_country:"register only",
// comp_dist:"register only",


comp_email:comp_email,
comp_field:comp_field,
comp_lat:comp_lat,
comp_long:comp_long,
comp_name:comp_name,
comp_passwd:comp_passwd,
comp_phone:comp_phone,
comp_website:comp_website,
comp_city:address,
comp_country:comp_name,
comp_dist:comp_name,

    }) .subscribe(
      data => {
        this.obtainAccessToken(comp_email, comp_passwd);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log(err);
        }
      })



      
  }



//////////////////////////////////////////////////////////////////////////////////////////////

// login_opr2(email: string, password: string): Observable<UserToken> {

//   let params = new URLSearchParams();
//   params.append('grant_type', 'password');
//   params.append('username', email);
//   params.append('password', password);
//   // params.append('client_id', 'fooClientIdPassword');

//   console.log(password);

//   let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + "Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
//   let options = new RequestOptions({ headers: headers });
//   return this.http.post(this.authUrl, params.toString(), options)
//     .map((res: Response) => {
//       let token = res.json();
//       token.login = email;
//       console.log("Access_token " + token.access_token);
//       console.log(this.redirectUrl);
//       this.saveUserToken(token);
//       return token;
//     }).catch((res:Response) =>{
//       return res.json();
//     });
// }

// saveUserToken(token) {
  
//   localStorage.setItem("token", JSON.stringify(token));
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

obtainAccessToken(username:string , password:string){
  console.log("logined");
  let params = new URLSearchParams();
  params.append('username',username);
  params.append('password',password);    
  params.append('grant_type','password');
  
  let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
  let options = new RequestOptions({ headers: headers });
   

return  this.http.post(this.URL+'/oauth/token', params.toString(), options)
    .map(res => res.json())
    .subscribe(
      data => {console.log(data.access_token) ,
       localStorage.setItem("access_token", data.access_token),
      this.get_info(data.access_token)},
      err => {alert("Invalid Email or Password") ,console.log("from get info"), this.route.navigate(['/authentication/login'])}
    ); 
}

get_info(token){
  
  let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic '+"Y2xpZW50X2lkOmFuZHJvaWQtc2VjcmV0"});
  let options = new RequestOptions({ headers: headers });
  // var token:string=localStorage.getItem("access_token");
  console.log(token);
  this.http.post(this.URL+'/up/mng/get_info?access_token='+token,options).map(res=>res.json() ).subscribe(
      data =>  {localStorage.setItem("manager",JSON.stringify(data) ),    console.log(localStorage.getItem("manager")),localStorage.setItem("state","true"),this.route.navigate(['/home'])},
      err => {alert("Invalid Email or Password") , this.route.navigate(['/authentication/login'])}
      
    )

      

}

saveToken(token){
  // var expireDate = new Date().getTime() + (1000 * token.expires_in);
  console.log(token);
  localStorage.setItem("access_token", token.access_token);
  
}



logout() {
  localStorage.clear();
  this.route.navigate(['/authentication/login']);
}
//////////////////////////////////////////////////////////////
update_manager(comp_field,comp_lat,comp_long,comp_name,comp_passwd,comp_phone,comp_website,comp_email){
 
 console.log("updated");
  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  var token:string=localStorage.getItem("access_token");
  console.log(token);
  let params = new URLSearchParams();
    params.append('access_token', '772035e1-223f-4f97-b8f1-9e12d723d968');
  
   this.http.put(this.URL+'/up/update_mng?access_token='+token,{

    comp_email:comp_email,
    comp_field:comp_field,
    comp_lat:comp_lat,
    comp_long:comp_long,
    comp_name:comp_name,
    comp_passwd:comp_passwd,
    comp_phone:comp_phone,
    comp_website:comp_website,
    comp_city:comp_name,
    comp_country:comp_name,
    comp_dist:comp_name,

   },options).map(res => res.json())
  //  .subscribe(data =>{localStorage.removeItem("manager"),localStorage.setItem("manager",JSON.stringify(data) )}
  .subscribe(data =>{localStorage.removeItem("manager"),localStorage.setItem("manager",JSON.stringify(data) ),this.obtainAccessToken(comp_email,comp_passwd),this.route.navigate(['/home'])}
  , err => console.log(err+ "from update errorr")
  );
 

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
all_emp(){
  
  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  var token = localStorage.getItem("access_token");
return this.http.get(this.URL+"/up/mng/allempl?access_token="+token,options).map((res:Response) => res.json());


}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
all_task(){
  // var emp:any;
  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  var token = localStorage.getItem("access_token");
 
return this.http.get(this.URL+"/up/mng/alltasks?access_token="+token,options).map((res:Response) => res.json());

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
all_clients(){
  
  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  var token = localStorage.getItem("access_token");
return  this.http.get(this.URL+"/up/mng/allcl?access_token="+token,options).map((res:Response) => res.json());


}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
all_managers(email:string){
  
  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  
return  this.http.get(this.URL+"/list",options).map(res => res.json())
.map(users => users.filter(user => user.comp_email === email))
.map(users => !users.length);


}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
check_manager(email:String){
  
  let headers = new Headers({'Content-type': 'application/json', 'Accept': "application/json"});
  let options = new RequestOptions({ headers: headers });
  
return  this.http.get(this.URL+"/mng_email/"+email+"/sure",options).map((res:Response) => res.json());
 
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
get_address(lat:number , lng:number){
return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?&latlng="+lat+","+lng+"&key=AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk")
// return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+"%2C-"+lng+"&key=AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk")
.map(res => res.json());
}
}
