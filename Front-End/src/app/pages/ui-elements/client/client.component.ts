import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
