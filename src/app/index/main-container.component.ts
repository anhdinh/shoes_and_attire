import { Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet>
    </router-outlet>
    <app-footer></app-footer>
  `
})
export class MainContainerComponent {

}
