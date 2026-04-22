import { TestBed } from '@angular/core/testing';

import { Produitservice } from './produitservice';

describe('Produitservice', () => {
  let service: Produitservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Produitservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
