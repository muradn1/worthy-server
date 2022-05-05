import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DiamondPriceEngine } from './diamond-price.engine';
import { DiamondsService } from './diamonds.service';
import { DiamondInput } from './models/diamond.input';
import { Diamond } from './models/diamond.model';

@Resolver()
export class DiamondsResolver {
    constructor(
        private diamondsService: DiamondsService,
        private diamondPriceEngine: DiamondPriceEngine,
    ) { }

    @Query(returns => [Diamond], { name: 'allDiamonds' })
    async getAllDiamonds() {
        return this.diamondsService.findAll();
    }

    @Mutation(returns => Diamond, { name: 'calcDiamondPrice' })
    async calcPriceAndSaveDiamond(@Args('diamond') diamond: DiamondInput) {
        const estimatedPrice = this.diamondPriceEngine.getEstimatedPrice(diamond);
        return this.diamondsService.create(diamond,estimatedPrice);
    }


}
