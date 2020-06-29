import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromContacts from './state/contacts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './state/contacts.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromContacts.contactsFeatureKey, fromContacts.reducer),
    EffectsModule.forFeature([ContactsEffects]),
    HttpClientModule
  ]
})
export class ContactsModule { }
