import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { environment } from 'projects/app/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private readonly _httpClient: HttpClient) { }

  load(): Observable<Contact[]> {
    const url = environment.contactsUrl;
    return this._httpClient.get<Contact[]>(url);
  }
}
