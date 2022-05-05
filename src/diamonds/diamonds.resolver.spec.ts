import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DiamondPriceEngine } from '../price-engine/diamond-price.engine';
import { DiamondSimilarEngine } from '../similar-engine/diamond-similar.engine';
import { DiamondsResolver } from './diamonds.resolver';
import { DiamondsService } from './diamonds.service';
import { DiamondsUtils } from '../shared/diamonds.utils';
import { SharedModule } from '../shared/shared.module';

describe('DiamondsResolver', () => {
  let resolver: DiamondsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondsResolver, DiamondPriceEngine, DiamondsService, DiamondsUtils, DiamondSimilarEngine],
      imports:[ConfigModule,SharedModule]
    }).compile();

    resolver = module.get<DiamondsResolver>(DiamondsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
