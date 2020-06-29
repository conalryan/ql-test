import { createAction, props } from '@ngrx/store';
import { Contact } from '../model/contact';
import { HttpErrorResponse } from '@angular/common/http';

export const loadContacts = createAction(
  '[Contacts] Load Contacts'
);

export const loadContactsSuccess = createAction(
  '[Contacts] Load Contacts Success',
  props<{ data: Contact[] }>()
);

export const loadContactsFailure = createAction(
  '[Contacts] Load Contacts Failure',
  props<{ error: HttpErrorResponse }>()
);
