import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ContactsActions from './contacts.actions';
import { ContactsService } from '../service/contacts.service';
import { Contact } from '../model/contact';

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

  addContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.addContact),
      concatMap((contact: Contact) => {
        // clone object and create a pseudo id to mock back-end response  
        const c = {...contact};
        c._id = Date.now().toString();
        return of(c).pipe(
          map(c => ContactsActions.addContactSuccess({ data: c })),
          catchError(error => of(ContactsActions.addContactFailure({ error }))))
      })
    );
  });

  constructor(private actions$: Actions, private readonly service: ContactsService) { }

}
