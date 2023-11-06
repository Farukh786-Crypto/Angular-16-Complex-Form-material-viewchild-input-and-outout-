import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageParent:string="This message coming from Parent component !!";

  ReceiveMessage(data:any)
  {
      alert(data);
  }

}
