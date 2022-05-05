import { Field, Float, ObjectType, registerEnumType } from "@nestjs/graphql";
import { DiamondClarity } from "./diamond-clarity.enum";
import { DiamondColor } from "./diamond-color.enum";
import { DiamondCut } from "./diamond-cut.enum";

@ObjectType()
export class Diamond {
  @Field()
  id: string;

  @Field()
  ownerId: string;

  @Field(type => Float)
  caratWeight: number;

  @Field(type => DiamondCut)
  cut: DiamondCut;

  @Field(type => DiamondColor)
  color: DiamondColor;

  @Field(type => DiamondClarity)
  clarity: DiamondClarity;

  @Field(type => Float)
  price: number;

  @Field({nullable:true})
  photo?: string;
}

registerEnumType(DiamondCut, {
  name: 'DiamondCut'
});

registerEnumType(DiamondColor, {
  name: 'DiamondColor'
});

registerEnumType(DiamondClarity, {
  name: 'DiamondClarity'
});