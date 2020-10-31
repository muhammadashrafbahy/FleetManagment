import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
