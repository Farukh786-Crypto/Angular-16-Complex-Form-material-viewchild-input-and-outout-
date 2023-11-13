import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // parent to child
  @Input() messageChild:string="This message coming from parent to child component !!";

  // child to parent
  @Output() messageEvent = new EventEmitter();

  sendMessageToParent()
  {
     const modifiedMessage:string='i want to send data from child to Parent !!';
     this.messageEvent.emit(modifiedMessage+'By Event');
  }
  
}
