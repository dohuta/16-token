import { Test } from '@nestjs/testing';

import { TokenService } from './app.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [TokenService],
    }).compile();

    service = app.get<TokenService>(TokenService);
  });

  describe('getData', () => {
    it('should define service', () => {
      expect(service).toBeDefined();
    });
  });
});
