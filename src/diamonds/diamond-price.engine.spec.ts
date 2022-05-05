import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { DiamondPriceEngine } from './diamond-price.engine';
import { DiamondsUtils } from './diamonds.utils';
import { DiamondClarity } from './models/diamond-clarity.enum';
import { DiamondColor } from './models/diamond-color.enum';
import { DiamondCut } from './models/diamond-cut.enum';
import { DiamondInput } from './models/diamond.input';

const MOCK_PRICE_ENGINE_CONFIG = {
    caratPrice: 100,
    uniqueColorFactor: 1.5,
    regularColorFactor: 1.0,
    clarityFactor: {
        FL: 1.5,
        IF: 1.45,
        VVS: 1.4,
        VS: 1.3,
        SI: 1.2,
        I1: 1.1,
        I2: 1.05
    },
    cutFixedCost: {
        ROUND: 500,
        PRINCESS: 400,
        EMERALD: 300,
        ASSCHER: 200,
        OVAL: 150,
    }
};

describe('DiamondsPriceEngine', () => {
    let engine: DiamondPriceEngine;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DiamondPriceEngine, DiamondsUtils, {
                provide: ConfigService,
                useValue: {
                    get: jest.fn((key: string) => {
                        if ('priceEngine') {
                            return MOCK_PRICE_ENGINE_CONFIG;
                        }
                        return null;
                    })
                }
            }],
            imports: [ConfigModule]
        }).compile();

        engine = module.get<DiamondPriceEngine>(DiamondPriceEngine);
    });

    it('should be defined', () => {
        expect(engine).toBeDefined();
    });

    it('should return 2817.5 as price for RED-FL-ROUND-10.3Carat Diamond', () => {
        //arrange
        const diamond: DiamondInput = {
            caratWeight: 10.3,
            clarity: DiamondClarity.FL,
            cut: DiamondCut.ROUND,
            color: DiamondColor.RED
        }

        const {caratPrice, uniqueColorFactor} = MOCK_PRICE_ENGINE_CONFIG;
        const clarityFactor = MOCK_PRICE_ENGINE_CONFIG.clarityFactor[diamond.clarity];
        const cutFixedCost = MOCK_PRICE_ENGINE_CONFIG.cutFixedCost[diamond.cut];

        const expecetedResult = caratPrice * diamond.caratWeight * uniqueColorFactor * clarityFactor + cutFixedCost;

        //act
        const acutalResult = engine.getEstimatedPrice(diamond);

        //assert
        expect(acutalResult).toBe(expecetedResult);
    });

});
