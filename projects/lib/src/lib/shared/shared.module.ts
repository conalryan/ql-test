import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormErrorDirective } from './directives/form-error/form-error.directive';

@NgModule({
  declarations: [NavBarComponent, FormErrorDirective],
  imports: [
    CommonModule,
    NgbDropdownModule,
    RouterModule
  ],
  exports: [NavBarComponent, FormErrorDirective]
})
export class SharedModule { }
