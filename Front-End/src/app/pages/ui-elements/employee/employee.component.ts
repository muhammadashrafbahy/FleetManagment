import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
