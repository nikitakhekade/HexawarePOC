import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [
  ]
})
export class ContentComponent {

  course ="Course Exists"

  handleReportGenerated(event :any){
    console.log(event)
  }

}
