import { Module } from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { DiamondsResolver } from './diamonds.resolver';

@Module({
    imports:[],
    providers:[DiamondsService, DiamondsResolver],
    controllers:[],
    
})
export class DiamondsModule {}
