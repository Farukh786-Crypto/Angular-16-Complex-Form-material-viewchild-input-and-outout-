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
    // access child component propert, method in parent component in ts file
      console.log('Parent button called !!');
      console.log('before value',this.ChildViewChildComponentRef.childProperty);
      this.ChildViewChildComponentRef.childProperty='Parent Value .. '
      console.log('after value',this.ChildViewChildComponentRef.childProperty);
      this.ChildViewChildComponentRef.childMethod();
  }

}
