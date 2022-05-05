import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PriceEngineConfig } from "src/config/configuration";
import { DiamondsUtils } from "./diamonds.utils";
import { DiamondClarity } from "./models/diamond-clarity.enum";
import { DiamondColor } from "./models/diamond-color.enum";
import { DiamondCut } from "./models/diamond-cut.enum";
import { DiamondInput } from "./models/diamond.input";

@Injectable()
export class DiamondPriceEngine {
    constructor(
        private readonly configService: ConfigService,
        private readonly diamondsUtils: DiamondsUtils
    ) {
        this.config = this.configService.get<PriceEngineConfig>('priceEngine');
    }

    config: PriceEngineConfig;

    getEstimatedPrice(diamond: DiamondInput) {
        const caratPrice:number = this.config.caratPrice;
        const colorFactor: number = this.getColorFactor(diamond.color);
        const clarityFactor: number = this.getClarityFactor(diamond.clarity);
        const cutFixedCost:number = this.getCutFixedCost(diamond.cut);
        console.log({caratPrice, colorFactor, clarityFactor, cutFixedCost})

        return caratPrice*diamond.caratWeight*colorFactor*clarityFactor + cutFixedCost;
    }

    private getColorFactor(color: DiamondColor) {
        const uniqueColorFactor = this.config.uniqueColorFactor;
        const regularColorFactor = this.config.regularColorFactor;

        return this.diamondsUtils.isUniqueColor(color) ? uniqueColorFactor : regularColorFactor;
    }
    private getClarityFactor(clarity: DiamondClarity){
       return this.config.clarityFactor[clarity] || 1.0;
    }

    private getCutFixedCost(cut: DiamondCut){
        return this.config.cutFixedCost[cut] || 0;
    }


}
