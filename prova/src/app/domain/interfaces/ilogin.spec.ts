import { TestBed } from '@angular/core/testing';

import { ILogin } from './ilogin';

describe('ILogin', () => {
  let service: ILogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ILogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
