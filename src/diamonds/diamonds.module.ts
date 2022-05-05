import { Module } from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { DiamondsResolver } from './diamonds.resolver';
import { DiamondPriceEngine } from './diamond-price.engine';
import { ConfigModule } from '@nestjs/config';
import { DiamondsUtils } from './diamonds.utils';

@Module({
    imports: [ConfigModule],
    providers: [
        DiamondsService,
        DiamondsResolver,
        DiamondsUtils,
        DiamondPriceEngine],
    controllers: [],

})
export class DiamondsModule { }
