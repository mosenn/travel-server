import { Test, TestingModule } from '@nestjs/testing';
import { MockapiController } from './mockapi.controller';

describe('MockapiController', () => {
  let controller: MockapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockapiController],
    }).compile();

    controller = module.get<MockapiController>(MockapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
