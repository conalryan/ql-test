import { Action, createReducer, on } from '@ngrx/store';
import * as ContactsActions from './contacts.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Contact } from '../model/contact';

export const contactsFeatureKey = 'contacts';

// export interface State {

// }

// export const initialState: State = {

// };

export interface State extends EntityState<Contact> {
  selectedContactId: number | null;
}

export function selectContactId(a: Contact): string {
  return a._id;
}
 
export const adapter: EntityAdapter<Contact> = createEntityAdapter<Contact>({
  selectId: selectContactId,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedContactId: null,
});
 
// const contactReducer = createReducer(initialState);
 
// export function reducer(state: State | undefined, action: Action) {
//   return contactReducer(state, action);
// }

export const reducer = createReducer(
  initialState,

  on(ContactsActions.loadContactsSuccess, ( state, { data }) => {
    return adapter.setAll(data, state);
  }),
  on(ContactsActions.loadContactsFailure, state => {
    return adapter.removeAll({ ...state, selectedUserId: null });
  })

);

