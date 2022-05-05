import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DiamondPriceEngine } from './diamond-price.engine';
import { DiamondsResolver } from './diamonds.resolver';
import { DiamondsService } from './diamonds.service';
import { DiamondsUtils } from './diamonds.utils';

describe('DiamondsResolver', () => {
  let resolver: DiamondsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondsResolver, DiamondPriceEngine, DiamondsService, DiamondsUtils],
      imports:[ConfigModule]
    }).compile();

    resolver = module.get<DiamondsResolver>(DiamondsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
