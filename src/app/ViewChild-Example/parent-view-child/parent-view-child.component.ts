import { Component, ViewChild } from '@angular/core';
import { ChildViewChildComponent } from '../child-view-child/child-view-child.component';

@Component({
  selector: 'app-parent-view-child',
  templateUrl: './parent-view-child.component.html',
  styleUrls: ['./parent-view-child.component.css']
})
export class ParentViewChildComponent {

  @ViewChild(ChildViewChildComponent) ChildViewChildComponentRef!:ChildViewChildComponent; 

  onButtonClick()
  {
      // @ViewChild is a property decorator. 
      // It provides a powerful way to access child elements and properties
      console.log('Parent button called !!');
      console.log('before value',this.ChildViewChildComponentRef.childProperty);
      this.ChildViewChildComponentRef.childProperty='Parent Value .. '
      console.log('after value',this.ChildViewChildComponentRef.childProperty);
      this.ChildViewChildComponentRef.childMethod();
  }

}
