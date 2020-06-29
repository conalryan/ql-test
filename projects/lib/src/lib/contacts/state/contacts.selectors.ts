import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContacts from './contacts.reducer';

export const selectContactsState = createFeatureSelector<fromContacts.State>(
  fromContacts.contactsFeatureKey
);

export const getSelectedContactId = (state: fromContacts.State) => state.selectedContactId;
 
// get the selectors from the adapter
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromContacts.adapter.getSelectors();
 
// select the array of contact ids
export const selectContactIds = selectIds;
 
// select the dictionary of contact entities
export const selectContactEntities = selectEntities;
 
// select the array of contacts
export const selectAllContacts = selectAll;
 
// select the total contact count
export const selectContactTotal = selectTotal;