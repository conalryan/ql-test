import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromContacts from '../../state/contacts.reducer';
import { selectAllContacts } from '../../state/contacts.selectors';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../../model/contact';
import { loadContacts, addContact } from '../../state/contacts.actions';

@Component({
  selector: 'lib-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  
  contacts$: Observable<(Contact | undefined)[]>;

  constructor(private readonly store: Store<fromContacts.State>) { }

  ngOnInit(): void {
    this.store.dispatch(loadContacts());
    this.contacts$ = this.store.select(selectAllContacts);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addContact(): void {
    this.store.dispatch(addContact());
  }
}
