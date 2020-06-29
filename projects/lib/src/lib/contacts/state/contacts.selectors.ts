import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContacts from './contacts.reducer';

export const selectContactsState = createFeatureSelector<fromContacts.State>(
  fromContacts.contactsFeatureKey
);

export const getSelectedContactId = (state: fromContacts.State) => state.selectedContactId;
 
export const selectContactIds = createSelector(selectContactsState, (state) => state?.ids);
export const selectContactEntities = createSelector(selectContactsState, (state) => state?.entities);
export const selectAllContacts = createSelector(selectContactsState, (state) => (state?.ids as Array<string|number>)?.map(id => state?.entities[id]));
export const selectContactTotal = createSelector(selectContactsState, (state) => state?.ids?.length);