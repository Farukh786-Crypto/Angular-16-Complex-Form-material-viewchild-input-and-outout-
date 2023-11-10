import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view-child',
  templateUrl: './child-view-child.component.html',
  styleUrls: ['./child-view-child.component.css']
})
export class ChildViewChildComponent {
    childProperty:string='Child Value';
    childMethod():string
    {
      return 'Child Method is called !!'
    }
}
