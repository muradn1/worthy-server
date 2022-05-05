import { Query, Resolver } from '@nestjs/graphql';
import { DiamondsService } from './diamonds.service';
import { Diamond } from './models/diamond.model';

@Resolver()
export class DiamondsResolver {
    constructor(
        private diamondsService: DiamondsService
    ) { }

    @Query(returns => [Diamond], {name: 'allDiamonds'})
    async getAllDiamonds(){
        return this.diamondsService.findAll();
    }
}
