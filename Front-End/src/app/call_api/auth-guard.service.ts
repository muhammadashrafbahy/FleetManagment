import { Injectable } from '@angular/core';
import {CanActivate,Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private route:Router){}
    canActivate() {
        console.log("OnlyLoggedInUsers");
        if (this.isLoggedIn()) { 
          return true;
        } else {
            this.route.navigate(['/authentication/login']);
        //   window.alert("You don't have permission to view this page"); 
          return false; 
    }
  }
  isLoggedIn(){
      if(localStorage.getItem("state")=="true"){
        return true;
      }
    return false;
}
}
