import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { ContactsEffects } from './contacts.effects';
import { ContactsService } from '../service/contacts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { contactsMock } from '../model/contact.mock';
import { loadContactsSuccess, loadContacts } from './contacts.actions';

describe('ContactsEffects', () => {
  let actions$: Observable<any>;
  let effects: ContactsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ContactsEffects,
        provideMockActions(() => actions$),
        ContactsService
      ]
    });

    effects = TestBed.inject(ContactsEffects);
    const service = TestBed.get(ContactsService);
    spyOn(service, 'load').and.returnValue(of(contactsMock()));
  });

  it('load contacts', () => {
    actions$ = hot('-a', {
      a: loadContacts()
    });
    const expected = cold('-(b)', {
      b: loadContactsSuccess({data: contactsMock()})
    });
    expect(effects.loadContacts$).toBeObservable(expected);
  });
});
