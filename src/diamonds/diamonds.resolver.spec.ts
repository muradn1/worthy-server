import { Test, TestingModule } from '@nestjs/testing';
import { DiamondsResolver } from './diamonds.resolver';

describe('DiamondsResolver', () => {
  let resolver: DiamondsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondsResolver],
    }).compile();

    resolver = module.get<DiamondsResolver>(DiamondsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
