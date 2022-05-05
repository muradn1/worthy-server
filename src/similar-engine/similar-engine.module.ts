import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import { DiamondSimilarEngine } from './diamond-similar.engine';

@Module({
    imports:[
        ConfigModule,
        SharedModule
    ],
    providers:[
        DiamondSimilarEngine
    ],
    exports:[
        DiamondSimilarEngine
    ]
    
})
export class SimilarEngineModule {}
