import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildView1Component } from '../child-view1/child-view1.component';

@Component({
  selector: 'app-parent-view1',
  templateUrl: './parent-view1.component.html',
  styleUrls: ['./parent-view1.component.css']
})
export class ParentView1Component implements AfterViewInit {

  nameParent:string='Angular from the unique world';

  // reference the child component
  @ViewChild(ChildView1Component,{static:false}) hello!:ChildView1Component; 

  // reference the contained element
  @ViewChild('header',{static:false}) headerRef!:ElementRef;

  // accessible in ngAfterViewInit hook 
  ngAfterViewInit(): void {
      console.log('hello',this.hello.nameChild);
      console.log(this.headerRef.nativeElement.innerHTML);
      this.headerRef.nativeElement.innerHTML='child text updated !!!';
  }

}
