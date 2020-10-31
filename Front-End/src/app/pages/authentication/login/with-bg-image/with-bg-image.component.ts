import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ManagerService } from '../../../../call_api/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {

  username:string;
  passwd:string;
  value:boolean=true;
  constructor(private srv:ManagerService , private route:Router ) { }

  login(){

    this.srv.obtainAccessToken(this.username, this.passwd);

    
  this.value=true;
  }

  continue(){


  }

  ngOnInit() {
  }

}
