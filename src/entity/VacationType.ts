import { Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class VacationType extends BaseEntity {
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    name: string;

    @Field({nullable: true})
    description?: string
}