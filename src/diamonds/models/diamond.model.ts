import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Diamond {
  @Field()
  id: string;

  @Field({ nullable: true })
  caratWeight: string;

  @Field({ nullable: true })
  cut?: string;

  @Field({ nullable: true })
  color?: string;
  
  @Field({ nullable: true })
  clarity?: string;
}