import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ContactsActions from './contacts.actions';
import { ContactsService } from '../service/contacts.service';

@Injectable()
export class ContactsEffects {

  loadContacts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ContactsActions.loadContacts),
      concatMap(() => {
        return this.service.load().pipe(
          map(data => ContactsActions.loadContactsSuccess({ data })),
          catchError(error => of(ContactsActions.loadContactsFailure({ error }))))
      })
    );
  });

  constructor(private actions$: Actions, private readonly service: ContactsService) { }

}
