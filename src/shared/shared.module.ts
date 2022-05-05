import { Module } from '@nestjs/common';
import { DiamondsUtils } from './diamonds.utils';

@Module({
    exports:[
    DiamondsUtils
    ],
    providers:[
        DiamondsUtils
    ]
})
export class SharedModule {}
