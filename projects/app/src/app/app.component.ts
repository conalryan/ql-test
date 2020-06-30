import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { addContactForm, addContactSuccess, addContactCancel } from 'projects/lib/src/lib/contacts';
import { Store } from '@ngrx/store';
import { loadAlert } from 'projects/lib/src/lib/shared/state/alerts.actions';
import { Alert } from 'projects/lib/src/lib/shared/model/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  title = 'app';

  constructor(
    private readonly store: Store<any>,
    private readonly actions$: Actions,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.actions$
      .pipe(
        takeUntil(this.unsubscribe$),
        ofType(addContactForm)
      )
      .subscribe((action: any) => {
        this.router.navigateByUrl('create');
      });

    this.actions$
      .pipe(
        takeUntil(this.unsubscribe$),
        ofType(addContactCancel)
      )
      .subscribe((action: any) => {
        this.router.navigateByUrl('list');
      });

    this.actions$
      .pipe(
        takeUntil(this.unsubscribe$),
        ofType(addContactSuccess)
      )
      .subscribe((action: any) => {
        this.router.navigateByUrl('list');
        const alert: Alert = {type: 'success', message: 'Added new contact'};
        this.store.dispatch(loadAlert({data: alert}));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
