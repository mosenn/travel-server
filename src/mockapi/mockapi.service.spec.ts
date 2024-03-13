import { Test, TestingModule } from '@nestjs/testing';
import { MockapiService } from './mockapi.service';

describe('MockapiService', () => {
  let service: MockapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockapiService],
    }).compile();

    service = module.get<MockapiService>(MockapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
