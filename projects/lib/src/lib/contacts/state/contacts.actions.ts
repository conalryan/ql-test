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

export const addContactForm = createAction(
  '[Contacts] Add Contact Form'
);

export const addContact = createAction(
  '[Contacts] Add Contact',
  props<Contact>()
);

export const addContactCancel = createAction(
  '[Contacts] Add Contact Cancel'
);

export const addContactSuccess = createAction(
  '[Contacts] Add Contact Success',
  props<{ data: Contact }>()
);

export const addContactFailure = createAction(
  '[Contacts] Add Contact Failure',
  props<{ error: HttpErrorResponse }>()
);
