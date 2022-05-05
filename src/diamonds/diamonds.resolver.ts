import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DiamondPriceEngine } from '../price-engine/diamond-price.engine';
import { DiamondSimilarEngine } from '../similar-engine/diamond-similar.engine';
import { DiamondsService } from './diamonds.service';
import { DiamondInput } from './models/diamond.input';
import { Diamond } from './models/diamond.model';

@Resolver()
export class DiamondsResolver {
    constructor(
        private diamondsService: DiamondsService,
        private diamondPriceEngine: DiamondPriceEngine,
        private diamondSimilarEngine: DiamondSimilarEngine,
    ) { }

    @Query(returns => [Diamond], { name: 'allDiamonds' })
    async getAllDiamonds() {
        return this.diamondsService.findAll();
    }

    @Query(returns => [Diamond], { name: 'findSimilarDiamonds' })
    async getSimilarDiamonds(
        @Args('diamondId') id: string,
        @Args({ name: 'limit', type: () => Int, nullable: true }) limit=4) {
        const diamond = this.diamondsService.findOne(id);
        const otherDiamonds = this.diamondsService.findAll().filter(diamond => diamond.id !== id);

        return this.diamondSimilarEngine.findSimilarDiamonds(diamond,otherDiamonds,limit);    
    }

    @Mutation(returns => Diamond, { name: 'calcDiamondPrice' })
    async calcPriceAndSaveDiamond(@Args('diamond') diamond: DiamondInput) {
        const estimatedPrice = this.diamondPriceEngine.getEstimatedPrice(diamond);
        return this.diamondsService.create(diamond, estimatedPrice);
    }


}
