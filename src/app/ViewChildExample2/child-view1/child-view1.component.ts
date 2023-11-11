import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-view1',
  templateUrl: './child-view1.component.html',
  styleUrls: ['./child-view1.component.css']
})
export class ChildView1Component {
    // pass data from parent to child 
    @Input() nameChild!:string;
}
