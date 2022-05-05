import { InputType, Field, Float } from '@nestjs/graphql';
import { DiamondClarity } from './diamond-clarity.enum';
import { DiamondColor } from './diamond-color.enum';
import { DiamondCut } from './diamond-cut.enum';

@InputType()
export class DiamondInput {
    @Field({ nullable: true })
    ownerId?: string;

    @Field({ nullable: true })
    photo?: string;

    @Field(type => Float)
    caratWeight: number;

    @Field(type => DiamondCut)
    cut: DiamondCut;

    @Field(type => DiamondColor)
    color: DiamondColor;

    @Field(type => DiamondClarity)
    clarity: DiamondClarity;
}