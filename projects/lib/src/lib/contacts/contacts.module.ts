import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromContacts from './state/contacts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './state/contacts.effects';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactDetailComponent } from './container/contact-detail/contact-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [ContactListComponent, ContactDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromContacts.contactsFeatureKey, fromContacts.reducer),
    EffectsModule.forFeature([ContactsEffects]),
    SharedModule,
    ContactsRoutingModule
  ],
  exports: [ContactListComponent, ContactDetailComponent]
})
export class ContactsModule { }
