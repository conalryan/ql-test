import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Alert } from '../../model/alert';
import { selectAlerts } from '../../state/alerts.selectors';
import { removeAlert } from '../../state/alerts.actions';
 
@Component({
  selector: 'lib-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  alerts$: Observable<Alert[]>;

  constructor(private readonly store: Store<any>) { }

  ngOnInit(): void {
    this.alerts$ = this.store.select(selectAlerts)
      .pipe(takeUntil(this.unsubscribe$));

    this.alerts$.pipe(
      debounceTime(5000)
    ).subscribe((alerts: Alert[]) => {
      const success = alerts.find(alert => alert.type === 'success');
      if (success) {
        this.store.dispatch(removeAlert({data: success}));
      }
    });
  }

  close(alert: Alert): void {
    this.store.dispatch(removeAlert({data: alert}));
  }
}
