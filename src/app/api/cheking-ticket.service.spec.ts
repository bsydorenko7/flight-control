import { TestBed } from '@angular/core/testing';

import { ChekingTicketService } from './cheking-ticket.service';

describe('ChekingTicketService', () => {
  let service: ChekingTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChekingTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
