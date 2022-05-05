import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { SimilarEngineConfig } from "src/config/configuration";
import { DiamondsUtils } from "../shared/diamonds.utils";
import { DiamondClarity } from "../diamonds/models/diamond-clarity.enum";
import { DiamondColor } from "../diamonds/models/diamond-color.enum";
import { DiamondCut } from "../diamonds/models/diamond-cut.enum";
import { Diamond } from "../diamonds/models/diamond.model";

@Injectable()
export class DiamondSimilarEngine {
    constructor(
        private readonly configService: ConfigService,
        private readonly diamondsUtils: DiamondsUtils,
    ) {
        this.config = this.configService.get<SimilarEngineConfig>('similarEngine');
    }

    private config: SimilarEngineConfig;

    findSimilarDiamonds(diamond: Diamond, otherDiamonds: Diamond[], limit = 4) {

        return otherDiamonds.map(otherDiamond => {
            const similarity = this.evaluateSimilarity(diamond, otherDiamond);
            return Object.assign({}, otherDiamond, { similarity });
        })
            .sort((a, b) => a.similarity - b.similarity)
            .slice(0, limit)
            .map(diamond => {
                delete diamond.similarity;
                return diamond;
            })
    }

    private evaluateSimilarity(diamond, otherDiamond): number {
        const { weightFactor, cutFactor, colorFactor, clarityFactor } = this.config;

        const colorSimilarity: number = this.getColorSimilarity(diamond.color, otherDiamond.color);
        const cutSimilarity: number = this.getCutSimilarity(diamond.cut, otherDiamond.cut);
        const claritySimilarity: number = this.getClaritySimilarity(diamond.clarity, otherDiamond.clarity);
        const weightSimilarity: number = this.getWeightSimilarity(diamond.caratWeight, otherDiamond.caratWeight);

        return (
            weightSimilarity * weightFactor +
            claritySimilarity * clarityFactor +
            cutSimilarity * cutFactor +
            colorSimilarity * colorFactor
        );
    }

    private getWeightSimilarity(caratWeight: any, otherCaratWeight: any): number {
        const caratWeightDistance = Math.abs(caratWeight - otherCaratWeight);

        return caratWeightDistance;
    }


    private getClaritySimilarity(clarity: DiamondClarity, otherClarity: DiamondClarity) {
        const clarityDistance = this.config.clarityDistance[clarity];
        const otherClarityDistance = this.config.clarityDistance[otherClarity];
        return Math.abs(clarityDistance - otherClarityDistance);
    }

    private getCutSimilarity(cut: DiamondCut, otherCut: DiamondCut) {
        const cutDistance = this.config.cutDistance[cut];
        const otherCutDistance = this.config.cutDistance[otherCut];
        return Math.abs(cutDistance - otherCutDistance);
    }

    private getColorSimilarity(color: DiamondColor, otherColor: DiamondColor) {
        const isColorUnique = this.diamondsUtils.isUniqueColor(color);
        const isOtherColorUnique = this.diamondsUtils.isUniqueColor(otherColor);

        return isColorUnique === isOtherColorUnique ? 0 : 1;
    }
}


