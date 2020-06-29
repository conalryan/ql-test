import { NgModule } from '@angular/core';
import { ContactsModule } from './contacts';
import { SharedModule } from './shared';

@NgModule({
  declarations: [],
  imports: [
    ContactsModule,
    SharedModule
  ],
  exports: [
    ContactsModule,
    SharedModule
  ]
})
export class LibModule { }
