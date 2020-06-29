import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { addContactForm, addContactSuccess, addContactCancel } from 'projects/lib/src/lib/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  title = 'app';

  constructor(
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
        ofType(addContactSuccess, addContactCancel)
      )
      .subscribe((action: any) => {
        this.router.navigateByUrl('list');
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
