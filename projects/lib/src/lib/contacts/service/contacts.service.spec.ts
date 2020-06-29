import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContactsService } from './contacts.service';
import { take } from 'rxjs/operators';
import { contactsMock } from '../model/contact.mock';

describe('ContactsService', () => {
  let service: ContactsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactsService]
    });
    service = TestBed.inject(ContactsService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be load contacts', () => {
    service.load().pipe(take(1)).subscribe(res => {
      expect(res).toEqual(contactsMock());
    });

    const httpReq = httpTestingController.expectOne(`http://demo5838836.mockable.io/contact`);
    expect(httpReq.request.method).toEqual('GET');
    httpReq.flush(contactsMock());
  });
});
