import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-demo',
  templateUrl: './side-nav-demo.component.html',
  styleUrls: ['./side-nav-demo.component.css']
})
export class SideNavDemoComponent {

  constructor(private route:Router) {
  }
  links=[
    {name:'Product Search',routerlink :'/stepper-comp'},
    {name:'On Search Response',routerlink:'#'},
    {name:'Product Select',routerlink:'#'},
    {name:'On Select Response',routerlink:'#'},
    {name:'Product Order Init Process',routerlink:'#'},
    {name:'Product Order Confirm',routerlink:'#'},
    {name:'Bill Update',routerlink:'#'},
    {name:'Product Cancel',routerlink:'#'},
    {name:'Product Track',routerlink:'#'},
    {name:'Product Status',routerlink:'#'},
  ];



}
