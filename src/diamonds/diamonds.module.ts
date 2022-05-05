import { Module } from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { DiamondsResolver } from './diamonds.resolver';
import { DiamondPriceEngine } from '../price-engine/diamond-price.engine';
import { ConfigModule } from '@nestjs/config';
import { DiamondsUtils } from '../shared/diamonds.utils';
import { DiamondSimilarEngine } from '../similar-engine/diamond-similar.engine';
import { SharedModule } from 'src/shared/shared.module';
import { PriceEngineModule } from 'src/price-engine/price-engine.module';
import { SimilarEngineModule } from 'src/similar-engine/similar-engine.module';

@Module({
    imports: [
        ConfigModule,
        SharedModule,
        PriceEngineModule,
        SimilarEngineModule
    ],
    providers: [
        DiamondsService,
        DiamondsResolver,
        ],
    controllers: [],

})
export class DiamondsModule { }
