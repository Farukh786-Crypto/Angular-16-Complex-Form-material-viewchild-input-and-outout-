import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() messageChild:string="This message coming from parent to child component !!";

  @Output() messageEvent = new EventEmitter();

  sendMessageToParent()
  {
     const modifiedMessage:string='i want to send data from child to Parent !!';
     this.messageEvent.emit(modifiedMessage+'By Event');
  }
  
}
