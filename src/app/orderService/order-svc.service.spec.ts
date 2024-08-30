import { TestBed } from '@angular/core/testing';

import { OrderSVCService } from './order-svc.service';

describe('OrderSVCService', () => {
  let service: OrderSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
