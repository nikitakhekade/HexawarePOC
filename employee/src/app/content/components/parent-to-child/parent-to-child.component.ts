import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  template: `
    <p>
      Age is {{age}}
    </p>
  `,
  styles: [
  ]
})
export class ParentToChildComponent {

  @Input() age=20;

}
