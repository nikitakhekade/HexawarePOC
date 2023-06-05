import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  template: `
    <div>
      <button type="button" (click)="handleSendData()">Send data</button>
    </div>
  `,
  styles: [
  ]
})
export class ChildToParentComponent {

  profileData="Nikita";

  @Output() onReportGenerated=new EventEmitter();

  handleSendData() : void{
    this.onReportGenerated.emit(this.profileData);
  }

}
