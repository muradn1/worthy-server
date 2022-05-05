import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import { DiamondPriceEngine } from './diamond-price.engine';

@Module({
    imports: [
        ConfigModule,
        SharedModule
    ],
    exports: [
        DiamondPriceEngine
    ],
    providers: [
        DiamondPriceEngine
    ]
})
export class PriceEngineModule {

}
