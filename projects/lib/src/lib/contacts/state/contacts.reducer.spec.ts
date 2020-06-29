import { reducer, initialState } from './contacts.reducer';
import { loadContacts, loadContactsSuccess } from './contacts.actions';
import { contactsMock } from '../model/contact.mock';

describe('Contacts Reducer', () => {

  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should return init state', () => {
    const action = loadContacts();
    const newState = reducer(undefined, action);
    expect(newState).toEqual({ ids: [], entities: Object({}), selectedContactId: null });
  });

  it('should return state (loadContactsSuccess)', () => {
    const contacts = contactsMock();
    const action = loadContactsSuccess({data: contacts})
    const newState = reducer(undefined, action);
    const entity = {
      ids: ['5de91c005b98615393e74931', '5de91c00d6b4d04e96ef44da', '5de91c007e02a7eb64124760'],
      entities: {
        '5de91c005b98615393e74931': contacts[0],
        '5de91c00d6b4d04e96ef44da': contacts[1],
        '5de91c007e02a7eb64124760': contacts[2]
      },
      selectedContactId: null
    };
    expect(newState).toEqual(entity);
  });
});
