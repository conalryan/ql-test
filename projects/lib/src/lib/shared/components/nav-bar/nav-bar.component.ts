import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {

  brand = 'QL Test';

  collapsed = true;

  constructor() { }

  logout(): void {
    console.log('Logging out...');
  }

}
