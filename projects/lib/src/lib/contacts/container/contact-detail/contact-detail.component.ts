import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../model/contact';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectedContact } from '../../state/contacts.selectors';
import * as fromContacts from '../../state/contacts.reducer';
import { takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { contactForm } from '../../form/contact.form';
import { addContact, addContactCancel } from '../../state/contacts.actions';

@Component({
  selector: 'lib-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  contact$: Observable<(Contact | undefined)>;
  form: FormGroup;

  constructor(private readonly store: Store<fromContacts.State>) { }

  ngOnInit(): void {
    this.store.select(selectedContact)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((contact: Contact) => {
        this.form = contactForm(contact);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  cancel(): void {
    this.store.dispatch(addContactCancel());
  }

  clear(): void {
    this.form.reset();
  }

  save(): void {
    this.store.dispatch(addContact(this.form.getRawValue()));
  }
}
