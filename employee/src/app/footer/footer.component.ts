import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <hr/>
    <div class ="container-fluid" align="center">
    <app-menu ></app-menu>
    <br/>
    <p>CopyRights to Nikita
    </p>
    </div>
  `,
  styles: [
  ]
})
export class FooterComponent {

}
