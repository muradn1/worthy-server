import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DiamondPriceEngine } from './diamond-price.engine';
import { DiamondsUtils } from './diamonds.utils';

describe('DiamondsPriceEngine', () => {
  let engine: DiamondPriceEngine;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondPriceEngine, DiamondsUtils],
      imports:[ConfigModule]
    }).compile();

    engine = module.get<DiamondPriceEngine>(DiamondPriceEngine);
  });

  it('should be defined', () => {
    expect(engine).toBeDefined();
  });
});
