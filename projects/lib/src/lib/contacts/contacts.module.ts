import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromContacts from './state/contacts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './state/contacts.effects';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ContactsRoutingModule } from './contacts-routing.module';


@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromContacts.contactsFeatureKey, fromContacts.reducer),
    EffectsModule.forFeature([ContactsEffects]),
    HttpClientModule,
    ContactsRoutingModule
  ],
  exports: [ContactListComponent]
})
export class ContactsModule { }
