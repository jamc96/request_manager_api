import { Field, ID, ObjectType } from "type-graphql";
import { PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";

@ObjectType()
export class Request extends BaseEntity {
    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    date: Date
}