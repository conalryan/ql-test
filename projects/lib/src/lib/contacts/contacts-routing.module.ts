import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ContactDetailComponent } from './container/contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: 'create',
    component: ContactDetailComponent
  },
  {
    path: 'list',
    component: ContactListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
