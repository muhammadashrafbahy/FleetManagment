import { Router } from '@angular/router';
import { element } from 'protractor';
import { ClientService } from './../../../call_api/client.service';
import { employee } from './../../../entities/employee';
import { CategoryService } from './../../../call_api/category.service';
import { RequestOptions, Http,Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { manager } from '../../../entities/manager';
import { ManagerService } from '../../../call_api/manager.service';
import { TaskServiceService } from '../../../call_api/task.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat = 31.150735;
  lng = 30.112281;
  latA =31.150735 ;
  lngA = 30.112281;
  zoom = 7;
  em:employee[];
  empSize:number;
  clientSize:number;
  taskSize:number=0;
  todayTask:number = 0;

  time:any;
  private URL ='http://localhost:8099'
  public redirectUrl: string;
  private authUrl = this.URL + '/oauth/token';

  loc:string[]=["24.799448","120.979021","24.779448","120.979021","24.799448","120.879021"]

  item= localStorage.getItem("manager") ;
  mng:manager  = JSON.parse(this.item);
  // markers 
  markers: marker[] = [
      {
          lat: 31.150735,
          lng: 30.112281,
          label: 'All',
          iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
          draggable: true,
          linkprofile:"https://ask.fm/eslamelkhafagy"
      },
      {
          lat: 31.150741,
          lng: 30.11229666,
          label: 'All',
          iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
          draggable: false,
          linkprofile:"https://ask.fm/eslamelkhafagy"
      },
      {
          lat: 31.15078852,
          lng: 30.112281669,
          label: 'All',
          iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
          draggable: true,
          linkprofile:"https://ask.fm/eslamelkhafagy"
      },
      {
          lat: 31.150852,
          lng: 30.112147,
          label: 'All',
          iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
          draggable: true,
          linkprofile:"https://ask.fm/eslamelkhafagy"
      },
      {
          lat: 31.1508857,
          lng: 30.112241,
          label: 'All',
          iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
          draggable: true,
          linkprofile:"https://ask.fm/eslamelkhafagy"
      },
      {
          lat: 31.150763,
          lng: 30.1122555,
          label: 'All',
          iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
          draggable: true,
          linkprofile:"https://ask.fm/eslamelkhafagy"
      }
  ]
  markerss:markers[]=[];
  public getAllTasks(){
      this. markers = [
          {
              lat: 24.7990126,
              lng: 120.9793394,
              label: 'All',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 24.794806,
              lng: 120.9725426,
              label: 'All',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: false,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 24.794806,
              lng: 120.9725426,
              label: 'All',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 24.7946819,
              lng: 120.9726749,
              label: 'All',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          }
        ]
        
  
  
  }
  
  public getFinishedTasks(){
  
     this. markers = [
          {
              lat: 51.673858,
              lng: 7.815982,
              label: 'finished',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 51.673858,
              lng: 7.715982,
              label: 'finished',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: false,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          
          {
              lat: 51.673858,
              lng: 7.725982,
              label: 'finished',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: false,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 51.623858,
              lng: 7.895982,
              label: 'finished',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 51.723858,
              lng: 7.895982,
              label: 'finished',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          }
        ]
        
  
  }
  
  public getNextTasks(){
      this. markers = [
          {
              lat: 51.673858,
              lng: 7.815982,
              label: 'Next',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 51.673858,
              lng: 7.715982,
              label: 'Next',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: false,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          
          {
              lat: 51.673858,
              lng: 7.725982,
              label: 'Next',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: false,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 51.623858,
              lng: 7.895982,
              label: 'Next',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          },
          {
              lat: 51.723858,
              lng: 7.895982,
              label: 'Next',
              iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
              draggable: true,
              linkprofile:"https://ask.fm/eslamelkhafagy"
          }
        ]
  
  
  }
  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -80
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];

  constructor(private srv:ManagerService , private http:Http ,private catservice:CategoryService ,private clientService:ClientService,private route:Router) {
    this.lat=this.mng.comp_lat;
    this.lng=this.mng.comp_long;

}

  ngOnInit() {
    this.refresh();
    if (this.time) {
        clearInterval(this.time);
     }
    this.time=setInterval(()=>{
        this.markerss=[];  
        this.refresh();
    },30000);
    
    this.clientService.getClients().subscribe((cl)=>{
        console.log(cl[0]);
        this.clientSize=cl.length;
    },(error)=>{
        console.log(error);
    });
    this.srv.all_task().subscribe((task)=>{
        this.taskSize=task.length;
        task.forEach(e => {
            let ee = new Date(e['start_date']);
            let dd= new Date();
            if(ee.getDay() == dd.getDay() && ee.getMonth()==dd.getMonth() && ee.getFullYear() == dd.getFullYear() ){
                this.todayTask +=1;
            }
        });
    })
  }
  routerOnDeactivate() {
    clearInterval(this.time);
}
  refresh(){
    this.catservice.getAllEmployee().subscribe((em)=>{
        this.em=em;
        this.empSize=em.length;
        em.forEach(element => {
            console.log(element);
            var m = new markers();
            m.lat=element['emp_lat'];
            m.lng=element['emp_long'];
            m.userName= element['emp_username'];
            m.id=element['emp_id'];
            console.log(m);
            this.markerss.push(m);
        });
        console.log(this.markerss);        
    },(error)=>{
      console.log(error);
      }
  );
  }
  profile(id:number){
    localStorage.setItem("emp_id",id+"");
    this.route.navigate(['/employee/employee-profile']);      
  }

}
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
iconUrl:string;
linkprofile:string;// not defind until now 
}
class markers {
    id:number;
    lat: number;
    lng: number;
    userName:string;// not defind until now 
    }
