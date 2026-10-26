import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from '../user';

describe('UserService', () => {
  let service: UserService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UserService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve the list of users', () => {
    const dummyUsers: User[] = [
      {
        id: 1,
        name: 'Oluyemi',
        email: 'yem@me.com',
        phone: '43434343',
        website: 'me.com',
        address: {
          street: 'sample street',
          suite: '29',
          city: 'Abuja',
          zipcode: '23401',
        },
      },
      {
        id: 2,
        name: 'Temi',
        email: 'tem@me.com',
        phone: '55242',
        website: 'tems.com',
        address: {
          street: 'Tems street',
          suite: '45',
          city: 'Lagos',
          zipcode: '23401',
        },
      },
    ];

    let users: User[] | undefined;
    service.getUsers().subscribe((result) => (users = result));

    const req = httpTesting.expectOne(service.apiURL);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);

    expect(users).toEqual(dummyUsers);
    expect(users).toHaveSize(2);
  });
});
