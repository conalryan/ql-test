import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbDropdownModule, NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormErrorDirective } from './directives/form-error/form-error.directive';
import { AlertsComponent } from './components/alerts/alerts.component';
import { StoreModule } from '@ngrx/store';
import * as fromAlerts from './state/alerts.reducer';
@NgModule({
  declarations: [NavBarComponent, FormErrorDirective, AlertsComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbAlertModule,
    RouterModule,
    StoreModule.forFeature(fromAlerts.alertsFeatureKey, fromAlerts.reducer)
  ],
  exports: [NavBarComponent, FormErrorDirective, AlertsComponent]
})
export class SharedModule { }
