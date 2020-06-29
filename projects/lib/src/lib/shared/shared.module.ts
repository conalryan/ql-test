import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports: [NavBarComponent]
})
export class SharedModule { }
