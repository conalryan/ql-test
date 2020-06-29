import * as fromContacts from './contacts.actions';

describe('loadContactss', () => {
  it('should return an action', () => {
    expect(fromContacts.loadContacts().type).toBe('[Contacts] Load Contacts');
  });
});
