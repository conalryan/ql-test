import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { addContact } from 'projects/lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  title = 'app';

  constructor(
    private readonly store: Store<{}>,
    private readonly actions$: Actions,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.actions$
      .pipe(
        takeUntil(this.unsubscribe$),
        ofType(addContact)
      )
      .subscribe((action: any) => {
        console.log('the action is: ');
        this.router.navigateByUrl('create');
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
